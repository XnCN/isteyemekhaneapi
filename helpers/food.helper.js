class FoodHelper {
    get(data) {
        this.prepareData(data);
        return this.getMenus();
    }
    prepareData(data) {
        const tempData = data.replace("[", "").replace("]", "");
        this.MENULIST = tempData.split("<-->");
    }
    prepareMenuObject(id) {
        return this.MENULIST[id]
            .split(",")
            .map(f => f.replace('"', "").replace(')"', ""))
            .map(f => {
                const food = f.split("(");
                const name = food[0].replace('[', '').trim();
                const cal = parseInt(food[1].split(" cal.")[0], 10);
                return {
                    name,
                    cal
                };
            });
    }
    getMenus() {
        const MENU1 = this.prepareMenuObject(0);
        const MENU2 = this.prepareMenuObject(1);
        return { MENU1, MENU2 };
    }
}

module.exports = new FoodHelper();
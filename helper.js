const prepareFoodInformations = (foods)=>{
    var regex = /(.*?) \( (\d+) Cal - (\d+) Gr \)/;
    return foods.includes("") ? {msg:"Yemek verisi bulunamadı"}: foods.map(food=>{
        const foodWithInfo = food.match(regex);
            return {
                Name:foodWithInfo[1].toLocaleUpperCase('tr').trim(),
                Cal:foodWithInfo[2],
                Gr:foodWithInfo[3]
            }
    });
}

module.exports = {prepareFoodInformations}
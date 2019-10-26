const prepareFoodInformations = (foods)=>{
    var regex = /(.*?) \( (\d+) Cal - (\d+) Gr \)/;
    return foods.map(food=>{
        try{
            const foodWithInfo = food.match(regex);
            return {
                Name:foodWithInfo[1].toLocaleUpperCase('tr').trim(),
                Cal:foodWithInfo[2],
                Gr:foodWithInfo[3]
            }
        }
        catch{return } 
    });
}

module.exports = {prepareFoodInformations}
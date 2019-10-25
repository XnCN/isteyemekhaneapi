const prepareFoodInformations = (foods)=>{
    var regex = /(.*?) \( (\d+) Cal - (\d+) Gr \)/;
    return foods.map(food=>{
        const foodWithInfo = food.match(regex);
        try{
            return {
                Name:foodWithInfo[1].toLocaleUpperCase('tr').trim(),
                Cal:foodWithInfo[2],
                Gr:foodWithInfo[3]
            }
        }catch{
            return {  }
        }
       
    });
}

module.exports = {prepareFoodInformations}
const express = require('express');
const app = express();

const requestService = require('./services/requestService');
const foodService = require('./services/foodService');

app.get('/foods/:date',async(req,res)=>{
    const {date} = req.params;
    const requestData = await requestService();
    const foods = await foodService(date,requestData);
    res.send(foods);
})

app.listen(3000,()=>console.log('Server is running on http://localhost:3000'))
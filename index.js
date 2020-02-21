require('dotenv').config();
const express = require('express');
const app = express();

//controllers
const FoodController = require('./controllers/food.controller');

app.get('/:date', async (req, res) => {
    const { date } = req.params;
    const menuList = await FoodController.getFoods(date);
    res.send(menuList);
})

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))
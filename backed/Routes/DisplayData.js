const express = require('express');
const Router = express.Router();

Router.post ("/FoodData",async (req ,res)=>{

    try {
        res.send([global.food_item,global.foodCategory])
        
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }

})

module.exports = Router;
const mongoose = require('mongoose');

const FoodSchema  =  new mongoose.Schema({
    foodName:{
        type :String,
        required :true,

    },daysIAte:{
        type :Number,
        required :true,

    }
});

const Food = mongoose.model("FoodData", FoodSchema);
module.exports = Food;
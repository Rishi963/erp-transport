const express = require('express');
const mongoose  = require('mongoose');
const app = express();
 
 const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@erp.woj8bwl.mongodb.net/food?retryWrites=true&w=majority",{
    useNewUrlParser :true,
});

app.get("/api",async(req, res) =>{
    const food = new FoodModel({ foodName : "testd", daysIAe :2});

    try{
        await food.save();
        res.send("data inserted");
    }catch(err){
        console.log(err);

    }
})


app.listen(3001,()=>{
    console.log("server running");
});
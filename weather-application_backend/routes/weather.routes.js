const express = require("express");
const router = express.Router();
require("dotenv").config();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

const API_KEY = process.env.API_KEY;
router.get("/weather", (req, res)=>{
    res.send("Weather Router")
});

router.post("/weather", async (req, res)=>{
    try{
        const {city} = req.body;
        if (!city) return res.status(400).json({message: "You have to type the city name"});
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${API_KEY}&units=metric`;
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error("We are not getting any response!!");
        const data = await response.json();
        console.log(data);
        res.status(201).json(data);
    }
    catch(err){
        res.status(500).json({message: "Server Error!!"});
    }
    // res.send("Weather Router");
});

module.exports = router;
const express = require("express");
const app = express();
const cors = require("cors");
const weatherRoute = require("./routes/weather.routes");
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', weatherRoute);
app.use((req, res, next)=>{
    res.status(400).json({message: "Invalid URL"});
    next();
});

// app.post('/weather', (req, res)=>{
//     res.status(201).json({message: "Successful"});
// });

app.get('/', (req, res)=>{
    res.status(200).send("<h1>This is the homepage</h1>");
});


module.exports = app;
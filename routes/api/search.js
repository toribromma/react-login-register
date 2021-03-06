const express = require("express");
const router = express.Router();

router.get("/api/search", function (req, res) {

    var state = req.query.state
    var city = req.query.city
    console.log(state)
    console.log(city)

    axios.get(`https://mashvisor-api.p.rapidapi.com/city/properties/${state}/${city}`, {

        "headers": {
            "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
            "x-rapidapi-key": process.env.API_KEY
        }
    }).then(function (result) {
        res.json(result.data.content.properties);
        // console.log(result.data.content.properties[0].neighborhood);
        // console.log(``)
    })

});
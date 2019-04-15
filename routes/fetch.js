const Router = require('express').Router();
const axios = require('axios');

let key = require('../config/key');

Router.get('/fetch', (req, res, next) => {
    const API_KEY = `http://api.openweathermap.org/data/2.5/forecast/hourly?q=Karachi,pk&units=metric&APPID=${key}`;

    axios({
        method: 'GET',
        url: API_KEY
    })
    .then(response => {

        let check;

        let rawDT = [];
        let data = response.data.list;

        for(let i = 0; i < data.length; i++) {
            check = data[0].dt_txt
            rawDT.push({
                date: data[i].dt_txt.split(' ')[0],
                day: data[i].dt_txt,
                hour: data[i].dt_txt.split(' ')[1],
                temp: data[i].main.temp,
                minTemp: data[i].main.temp_min,
                maxTemp: data[i].main.temp_max,
                humidity: data[i].main.humidity,
                icon: data[i].weather[0].icon
            });
            rawDT[i].day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(rawDT[i].day).getDay()];
            rawDT[i].temp = Math.round(rawDT[i].temp);
            rawDT[i].minTemp = Math.round(rawDT[i].minTemp);
            rawDT[i].maxTemp = Math.round(rawDT[i].maxTemp);
        }

    

        let date = new Date();
        let hourFilter = date.getHours()+':00:00';


        let el = rawDT.filter(element => element.hour === hourFilter);


        res.status(200).json(el);


    })
    .catch(err => {
        console.log(err);
        next(err);
    });
})

module.exports = Router;
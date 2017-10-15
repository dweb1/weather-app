var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weather-app');

var User = require('../models/user');
var City = require('../models/city');

City.remove({}, function(err){
    console.log(err);
  });
  
User.remove({}, function(err){
    console.log(err);
});

var atlanta = new City({
    name: "Atlanta"
})

var newyork = new City({
    name: "New York"
})

var london = new City({
    name: "London"
})

atlanta.save( (err) => {
    if (err) console.log(err);
    console.log('Atlanta created');
})

newyork.save( (err) => {
    if (err) console.log(err);
    console.log('New York created');
})

london.save( (err) => {
    if (err) console.log(err);
    console.log('London created');
})

mongoose.connection.close();
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

atlanta.save( (err) => {
    if (err) console.log(err);
    console.log('Atlanta created');
})

mongoose.connection.close();
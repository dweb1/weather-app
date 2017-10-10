var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var CitySchema = new Schema({
  name: String
});

var UserSchema = new Schema({
  first_name: String,
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
  cities: [CitySchema]
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});


var UserModel = mongoose.model("User", UserSchema);
var CityModel = mongoose.model("City", CitySchema);

module.exports = {
  User: UserModel,
  City: CityModel
};
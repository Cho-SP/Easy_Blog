var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gbSchema = new Schema({
  name: {type: String, required: false},
  email: {type: String, required: false},
  password: {type:String, required: false},
  content: {type:String, required: false},
  living: {type:String, required: false},
  createdDate: {type: Date, default: Date.now},
  signid: {type:String, required:false},
  pwd:{type:String, required:false}
});

module.exports = mongoose.model('gbdb', gbSchema);
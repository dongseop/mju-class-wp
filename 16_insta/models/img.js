var mongoose = require('mongoose'),
    moment = require('moment'),
    Schema = mongoose.Schema;

var schema = new Schema({
  url: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now, index: true}
}, {
  toJSON: {virtuals: true },
  toObject: {virtuals: true}
});

var Img = mongoose.model('Img', schema);

module.exports = Img;

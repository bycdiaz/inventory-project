const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  age: Number,
});

PetSchema
  .virtual('url')
  .get(function () {
    return '/pet/' + this._id;
  });

module.exports = mongoose.model('Pet', PetSchema);
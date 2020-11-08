const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
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
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ]
});

// Virtual for Toppings URL
ToppingsSchema.virtual('url').get(() => {
  return '/person/' + this._id;
})

module.exports = mongoose.model('Person', PersonSchema);

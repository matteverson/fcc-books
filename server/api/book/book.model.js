'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  thumbnail: String,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Book', BookSchema);

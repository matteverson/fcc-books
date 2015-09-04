'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TradeSchema = new Schema({
  book: {type: Schema.Types.ObjectId, ref: 'Book'},
  requester: {type: Schema.Types.ObjectId, ref: 'User'},
  requestee: {type: Schema.Types.ObjectId, ref: 'User'},
  approved: Boolean
});

module.exports = mongoose.model('Trade', TradeSchema);

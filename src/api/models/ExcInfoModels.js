const mongoose = require("mongoose");
const dotenv = require('dotenv');
const Schema = mongoose.Schema;

dotenv.config();

const ExcInfoSchema = new Schema({
  // _id: {
  //   type: Number,
  //   default: 1,
  //   unique: true,
  // },
  username: {
    type: String,
    required: true,
    default: ''
  },
  date: {
    type: Date,
    default: ''
  },
  activityType: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
});

module.exports =  mongoose.model('ExcInfoSchema', ExcInfoSchema, process.env.CollectionInfo);

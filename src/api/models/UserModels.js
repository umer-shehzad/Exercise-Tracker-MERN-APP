const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
dotenv.config();


const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        default: ''
    },
    email: {
        type: String,
        require: true,
        default: ''
    },
    password: {
        type: String,
        require: true,
        default: ''
    }
});

module.exports = mongoose.model('user', userSchema);
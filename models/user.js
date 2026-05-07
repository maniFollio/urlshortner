const mongoose = require('mongoose');

const shortUrl = new mongoose.Schema({
    longUrl: {type: String, required: true},
    shortCode: {type: String, required: true, unique:true}
});

module.exports = mongoose.model('smallUrl', shortUrl);
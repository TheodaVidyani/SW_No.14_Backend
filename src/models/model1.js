const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    id:Number,
    name:String,
    descripton:String,
})

const Test =mongoose.model('Test', testSchema);

module.exports = Test;
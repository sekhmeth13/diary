const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
	title: String,
    createdAt: Date,
    content: String
});

module.exports.model = mongoose.model('Note', notesSchema);
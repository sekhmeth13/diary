const mongoose = require('mongoose');
const notesModel = require('../models/notesModel').model;

//connection to the database
mongoose.connect('mongodb://localhost:27017/diary', {
    useNewUrlParser: true
});

function findByDate(dateFilter){

	if(dateFilter === 'today'){
		const today = new Date();
		today.setHours(0,0,0,0);
		return notesModel.find({
			createdAt: {
				'$gt': today,
			} 
		}).sort({ createdAt: -1 });
	}

	if(dateFilter === 'past'){
		const today = new Date();
		today.setHours(0,0,0,0);
		return notesModel.find({
			createdAt: {
				'$lt': today,
			} 
		}).sort({ createdAt: -1 })
	}
}

function find(filters) {
		if(filters.hasOwnProperty('date')){
			return findByDate(filters.date)
		}
    return notesModel.find()
}



function create(newNote) {
	return notesModel.create({
    	title: newNote.title,
        createdAt: Date.now(),
        content: newNote.content
    })
}

function deleteNote(noteId) {
	return notesModel.deleteOne({ _id: noteId });
}

function getStats(){
	const today = new Date();
	today.setHours(0,0,0,0);
	const stats = {createdToday:0, totalCreated:0};
	return notesModel.countDocuments({createdAt: {
		'$gt': today,
	} })
	.then(todaysNoteNumber => {
		stats.createdToday = todaysNoteNumber;
		return notesModel.countDocuments();
	})
	.then(totalNotesNumber => {
		stats.totalCreated = totalNotesNumber;
		return notesModel.find().then(notes => {
			const filteredNotes = notes.filter(note => note.content.length > 10);
			return filteredNotes.length;
		})
	})
	.then(notesMoreThan10Words => {
		stats.moreThan10WordsNotes = notesMoreThan10Words;
		return stats;
	});

}

module.exports = {
    find,
    create,
    deleteNote,
    getStats,
}
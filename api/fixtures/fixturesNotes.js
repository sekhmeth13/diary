var assert = require('assert');
const mongoose = require('mongoose');
const notesModel = require('../models/notesModel').model;
const faker = require('faker');


// Fixtures for tests
mongoose.connect('mongodb://localhost:27017/diary', {
    useNewUrlParser: true
});

const notes = []

for (let i = 1; i <= 4; i++) {
    notes.push({
    	title: faker.lorem.text(10),
        createdAt: faker.date.recent(10),
        content: faker.lorem.text(40)
    })
}
notesModel.deleteMany({})
	.then(() => notesModel.insertMany(notes) )
	.then(() => {
		console.log('fixtures loaded ;)');
		process.exit()
	})

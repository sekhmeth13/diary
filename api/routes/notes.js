const notesService = require('../services/notesService');

module.exports = function(router){
    // Routes definition
    router.get('/notes', (req, res) => {
    	const filters = req.query
        return notesService.find(filters)
        .then(docs => res.send(JSON.stringify(docs)));
    });

    router.post('/notes', (req, res) => {
        return notesService.create(req.body)
        .then(response => res.send(JSON.stringify(response)));
    });
    router.delete('/notes/:id', (req, res) => {
        return notesService.deleteNote(req.params.id)
        .then(response => res.send(JSON.stringify(response)));
    });

    router.get('/stats', (req, res) => {
        return notesService.getStats()
        .then(stats => res.send(JSON.stringify(stats)));
    });

    return router;
}
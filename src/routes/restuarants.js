module.exports = (app) => {
    const notes = require('../controllers/Restuarant');
    app.get('/restuarants', notes.findAll)
}

const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require('mongoose');
const CONNECTION_URL = require('./config/database.config.js');
mongoose.Promise = global.Promise;
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
require('./routes/restuarants')(app);
mongoose.connect(CONNECTION_URL.url, { useNewUrlParser: true }).then(() => {
    console.log('connected to db');
}).catch(() => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

app.listen(3000, () => { console.log('Listening on port 3000') });



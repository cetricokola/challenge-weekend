
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 5000;
const {getHomePage, getSubjectPage, getSchedulePage, viewSchedule,  deleteSchedule} = require('./src/router/index');
const {addTeachers} = require('./src/router/teachers');
const {addSubject} = require('./src/router/subject');
const {createSchedule} = require('./src/router/schedule');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password2015Mysql.com',
    database: 'teaching'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

app.set('port', process.env.port || port);
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/', getHomePage);
app.get('/subject', getSubjectPage);
app.get('/schedule', getSchedulePage);
app.get('/view_schedule', viewSchedule);
app.post('/add_teacher', addTeachers);
app.post('/add_subject', addSubject);
app.post('/create_schedule', createSchedule);
app.get('/delete_schedule/ :id', deleteSchedule);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});





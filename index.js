const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//Data from json file
const courses = require('./fakeData/courses.json')
const categories = require('./fakeData/categories.json')

app.get('/', (req, res) => {
    res.send('DevHero API is running')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/courses', (req, res) => {
    res.send(courses);
})


app.listen( port, () => {
    console.log('Server running on port:' + port);
})
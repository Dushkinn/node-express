const express = require('express');
const path = require("path");
const expressHandlebars = require('express-handlebars');

const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');

const app = express();

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'))
app.use('/', homeRoutes);
app.use('/course/list', coursesRoutes);
app.use('/course/add', addRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
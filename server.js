const express = require('express');
const bodyParser = require('body-parser');
const githubRoutes = require('./github/routes');

var app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3333;
app.get('/', async (req, res) => {
    res.redirect('/github');
});

app.use('/github', githubRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`));



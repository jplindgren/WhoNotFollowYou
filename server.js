const express = require('express');
const bodyParser = require('body-parser');
const githubRoutes = require('./github-service/routes');

var app = express();
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;
app.get('/', async (req, res) => {
    res.redirect('/github');
});

app.get('/ping', async (req, res) => {
    res.write("pong");
});

app.use('/github', githubRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`));



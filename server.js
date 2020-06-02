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

/*
app.get('/nofollowback/:username', async (req, res, next) => {
    var results = await listGithub(req.params.username);
    res.render('list', { title: 'Not Following You back list', results: results });
});

app.post('/nofollowback', async (req, res) => res.redirect(`/nofollowback/${req.body.username}`));
*/

app.listen(port, () => console.log(`Listening to port ${port}`));



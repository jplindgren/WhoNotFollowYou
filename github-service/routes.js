var express = require('express');
var router = express.Router();
const listGithub = require('./list-github');

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/nofollowback/:username', async (req, res, next) => {
    var results = await listGithub(req.params.username);
    res.render('list', { title: 'Not Following You back list', results: results });
});

router.post('/nofollowback', async (req, res) => res.redirect(`/github/nofollowback/${req.body.username}`));

module.exports = router;
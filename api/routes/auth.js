const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('login route');
});

router.get('/register', (req, res) => {
    res.send('register route');
});

module.exports = router;
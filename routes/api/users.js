const express = require('express');
const router = express.Router();
const Users = require('../../data/db-helper');

router.get('/', async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            errorMessage: 'There was an error'
        });
    }
});

module.exports = router;
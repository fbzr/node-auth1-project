const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Users = require('../../data/db-helper');


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const [user] = await Users.findBy({ username });

        if (!user) {
            return res.status(400).json({ errorMessage: 'Invalid username' });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ errorMessage: 'Invalid password' });
        }
        console.log(user);
        req.session.user = user;
        res.json({ message: 'User successfully logged in' });
    } catch (error) {
        res.status(500).json({ errorMessage: 'There was an error logging in.' });
    }    
});

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(401).json({ errorMessage: 'Username and Password are required.' });
        }

        const rounds = process.env.HASH_ROUNDS || 10;
        const hash = bcrypt.hashSync(password, rounds);

        const user = await Users.add({
            username,
            password: hash
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ 
            errorMessage: 'There was an error registering user.',
            error
        });
    }
});

module.exports = router;
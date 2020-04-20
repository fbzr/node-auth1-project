const express = require('express');
const session = require('express-session');
const sessionConfig = require('./utils/session-config');
const auth = require('./middleware/auth');

const server = express();
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/users', auth, require('./routes/api/users'));
server.use('/api/', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
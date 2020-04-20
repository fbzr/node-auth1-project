const express = require('express');

const server = express();
server.use(express.json());

server.use('/api/', require('./api/routes/auth'));


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
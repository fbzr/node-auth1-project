const db = require('./db-config');

const findAll = () => db('users');

const findById = id => db('users').where({id}).first();

const findBy = filter => db('users').where(filter);

const add = async user => {
    const [id] = await db('users').insert(user, 'id');
    console.log(id);
    return id ? findById(id) : null;
}

module.exports = {
    findAll,
    findById,
    findBy,
    add
}
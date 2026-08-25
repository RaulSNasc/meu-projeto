const { users, generateId } = require('../data/connectData');

// POST /api/users
function createUser(req, res) {
    const { name, email } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            error: 'O campo "name" é obrigatório.'
        });
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
        return res.status(400).json({
            error: 'O campo "email" é obrigatório.'
        });
    }

    const newUser = {
        id: generateId(),
        name: name.trim(),
        email: email.trim()
    };

    users.push(newUser);

    return res.status(201).json({
        data: newUser
    });
}

// GET /api/users
function getUsers(req, res) {
    return res.status(200).json({
        data: users
    });
}

// GET /api/users/:id
function getUserById(req, res) {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    return res.status(200).json({
        data: user
    });
}

// PUT /api/users/:id
function updateUser(req, res) {
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    const { name, email } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            error: 'O campo "name" é obrigatório.'
        });
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
        return res.status(400).json({
            error: 'O campo "email" é obrigatório.'
        });
    }

    users[index] = {
        id: users[index].id,
        name: name.trim(),
        email: email.trim()
    };

    return res.status(200).json({
        data: users[index]
    });
}

// DELETE /api/users/:id
function deleteUser(req, res) {
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado'
        });
    }

    users.splice(index, 1);

    return res.status(204).send();
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
const jwt = require('jsonwebtoken')

const createUserToken = async (user, req, res) => {
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, 'fatec-turma6-a2026')

    res.status(201).json({
        message: 'Voce esta autenticado',
        token: token,
        userId: user._id,
    })
}

module.exports = createUserToken

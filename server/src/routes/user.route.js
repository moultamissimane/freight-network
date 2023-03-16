const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUserById,
    getAllUsers,
} = require('../controller/user.controller');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);
router.get('/allusers', getAllUsers);

module.exports = router;
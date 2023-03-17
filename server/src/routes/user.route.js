const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    getUserById,
    getAllUsers,
} = require('../controller/user.controller');

router.get('/get', getAllUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);

module.exports = router;
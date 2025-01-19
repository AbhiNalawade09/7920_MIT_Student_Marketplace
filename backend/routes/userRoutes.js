import express from 'express';
import {
    createUser,
    getUsers,
    getUserByEmail,
    updateUserByEmail,
    deleteUserByEmail,
    loginUser,
    logoutUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/:email', getUserByEmail);
router.put('/:email', updateUserByEmail);
router.delete('/:email', deleteUserByEmail);

export default router;

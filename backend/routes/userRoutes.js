import express from 'express';
import {
    createUser,
    getUsers,
    getUserByEmail,
    updateUserByEmail,
    deleteUserByEmail,
    loginUser
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.post('/login', loginUser);
router.get('/:email', getUserByEmail);
router.put('/:email', updateUserByEmail);
router.delete('/:email', deleteUserByEmail);

export default router;

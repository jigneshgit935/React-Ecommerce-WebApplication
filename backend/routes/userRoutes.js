import express from 'express';
import {
  createUser,
  deleteUserById,
  getAllUser,
  getCurrentUserProfile,
  getUserById,
  loginUser,
  logoutCurrentUser,
  updateCurrentUserProfile,
} from '../controllers/userController.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router();

router
  .route('/')
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUser);
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);

router
  .route('/profile')
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

//Admin routes
router
  .route('/:id')
  .delete(authenticate, authorizeAdmin, deleteUserById)
  .get(authenticate, authorizeAdmin, getUserById);

export default router;

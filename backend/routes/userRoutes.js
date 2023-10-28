import express from 'express';
import {
  createUser,
  getAllUser,
  getCurrentUserProfile,
  loginUser,
  logoutCurrentUser,
} from '../controllers/userController.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router();

router
  .route('/')
  .post(createUser)
  .get(authenticate, authorizeAdmin, getAllUser);
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);

router.route('/profile').get(authenticate, getCurrentUserProfile);

export default router;

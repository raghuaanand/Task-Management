import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { registerValidation, loginValidation } from '../utils/validators';
import { validateRequest } from '../middleware/errorHandler';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/register', registerValidation, validateRequest, authController.register);
router.post('/login', loginValidation, validateRequest, authController.login);
router.post('/refresh', authController.refresh);
router.post('/logout', authenticateToken, authController.logout);

export default router;

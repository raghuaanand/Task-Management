import { Router } from 'express';
import * as taskController from '../controllers/task.controller';
import { createTaskValidation, updateTaskValidation, taskQueryValidation } from '../utils/validators';
import { validateRequest } from '../middleware/errorHandler';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.use(authenticateToken);

router.post('/', createTaskValidation, validateRequest, taskController.createTask);
router.get('/', taskQueryValidation, validateRequest, taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.patch('/:id', updateTaskValidation, validateRequest, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/toggle', taskController.toggleTaskStatus);

export default router;

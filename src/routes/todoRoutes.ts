import { Router } from 'express';
import { TodoController } from '../controllers/todoControllers.js';

const router = Router();
const todoController = new TodoController();

router.get('/todos', (req, res, next) =>
  todoController.getTodos(req, res, next),
);
router.get('/todo/:id', (req, res, next) =>
  todoController.getTodoById(req, res, next),
);
router.post('/todo', (req, res, next) =>
  todoController.createTodo(req, res, next),
);
router.patch('/todo/:id', (req, res, next) =>
  todoController.updateTodoById(req, res, next),
);
router.delete('/todo/:id', (req, res, next) =>
  todoController.deleteTodoById(req, res, next),
);

export default router;

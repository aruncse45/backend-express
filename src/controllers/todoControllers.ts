import { TodoService } from '../services/todoService.js';
import { CreateTodoDto, UpdateTodoDto } from '../types';
import { Request, Response, NextFunction } from 'express';

export class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  getTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = this.todoService.getTodos();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  async getTodoById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const todo = await this.todoService.getTodoById(req.params.id);
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  async createTodo(
    req: Request<{}, {}, CreateTodoDto>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const todo = await this.todoService.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      next(error);
    }
  }

  updateTodoById(
    req: Request<{ id: string }, {}, UpdateTodoDto>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const todo = this.todoService.updateTodo(req.params.id, req.body);
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  deleteTodoById(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const deleted = this.todoService.deleteTodo(req.params.id);
      if (!deleted) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

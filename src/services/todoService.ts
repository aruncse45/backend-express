import { CreateTodoDto, Todo, UpdateTodoDto } from '../types';
import { v4 as uuidv4 } from 'uuid';

const todos: Todo[] = [
  {
    id: '1',
    title: 'Buy groceries',
    completed: false,
    createdAt: new Date('2024-10-20T10:30:00Z'),
    updatedAt: new Date('2024-10-20T10:30:00Z'),
  },
  {
    id: '2',
    title: 'Finish TypeScript project',
    completed: true,
    createdAt: new Date('2024-10-21T14:00:00Z'),
    updatedAt: new Date('2024-10-23T09:00:00Z'),
  },
];

export class TodoService {
  async createTodo({ title, completed }: CreateTodoDto) {
    const todo: Todo = {
      id: uuidv4(),
      title,
      completed: completed || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    todos.push(todo);
    return todo;
  }

  getTodos() {
    return todos;
  }

  getTodoById(id: string) {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    return todo;
  }

  updateTodo(id: string, { title, completed }: UpdateTodoDto) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new Error('Todo not found');
    }
    todos[index] = {
      ...todos[index],
      title: title || todos[index].title,
      completed: completed || todos[index].completed,
      updatedAt: new Date(),
    };
    return todos[index];
  }

  deleteTodo(id: string) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return false;
    }
    todos.splice(index, 1);
    return true;
  }
}

export interface Todo {
  description: string;
  done: boolean;
}

export type TodoState = [Todo[], (newTodos: Todo[]) => void];

export interface TodoListProps {
  todoState: TodoState;
}

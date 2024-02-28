import { Dispatch, SetStateAction } from "react";

export interface Todo {
  description: string;
  done: boolean;
}

export type TodoState = [Todo[], Dispatch<SetStateAction<Todo[]>>];

export interface TodoListProps {
  todoState: TodoState;
}

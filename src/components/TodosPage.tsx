import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { Todo } from "../types";

export function TodosPage() {
  const todoState = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") ?? "[]") as Todo[]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState[0]));
  }, [todoState]);

  return (
    <main className="mx-2">
      <TodoForm className="my-2" todoState={todoState} />
      <TodoList className="my-2" todoState={todoState} />
    </main>
  );
}

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export function TodosPage() {
  return (
    <main className="mx-2">
      <TodoForm className="my-2" />
      <TodoList className="my-2" />
    </main>
  );
}

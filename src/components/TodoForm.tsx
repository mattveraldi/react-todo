import { FormEvent } from "react";
import { TodoListProps } from "../types";

export function TodoForm(props: TodoListProps & { className: string }) {
  const [todos, setTodos] = props.todoState;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const description = formData.get("description") as string;
    setTodos([...todos, { description, done: false }]);
  }

  return (
    <form className={props.className} onSubmit={handleSubmit}>
      <label>
        Descrizione:
        <input name="description" type="text" />
      </label>
      <button>Aggiungi</button>
    </form>
  );
}

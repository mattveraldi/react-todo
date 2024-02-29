import { FormEvent } from "react";
import { todos } from "./todo-state";

export function TodoForm(props: { className: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const description = formData.get("description") as string;
    todos.value = [...todos.value, { description, done: false }];
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

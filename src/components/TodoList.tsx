import type { Todo } from "../types.ts";
import { todos } from "./todo-state.ts";

export function TodoList(props: { className: string }) {
  const handleChecked = (todo: Todo) => {
    todos.value = todos.value.map((_todo) => {
      if (_todo.description === todo.description)
        return { ...todo, done: !todo.done };
      return _todo;
    });
  };

  const handleDelete = (todo: Todo) => {
    todos.value = todos.value.filter((_todo) => {
      return _todo.description !== todo.description;
    });
  };

  return (
    <ul className={props.className}>
      {todos.value.map((todo) => {
        return (
          <li>
            <input
              className="mr-2"
              type="checkbox"
              checked={todo.done}
              onChange={() => handleChecked(todo)}
            />
            {todo.done ? (
              <s>{todo.description}</s>
            ) : (
              <span>{todo.description}</span>
            )}
            <button
              onClick={() => handleDelete(todo)}
              className="ml-2"
              type="button"
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

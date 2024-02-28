import type { Todo, TodoListProps } from "../types.ts";

export function TodoList(props: TodoListProps & { className: string }) {
  const [todos, setTodos] = props.todoState;

  const handleChecked = (todo: Todo) => {
    setTodos((_todos) => {
      return _todos.map((_todo) => {
        if (_todo.description === todo.description)
          return { ...todo, done: !todo.done };
        return _todo;
      });
    });
  };

  return (
    <ul className={props.className}>
      {todos.map((todo) => {
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
          </li>
        );
      })}
    </ul>
  );
}

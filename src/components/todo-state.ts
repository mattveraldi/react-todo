import { signal, effect } from "@preact/signals-core";
import { Todo } from "../types";

export const todos = signal(
  JSON.parse(localStorage.getItem("todos") ?? "[]") as Todo[]
);

effect(() => {
  localStorage.setItem("todos", JSON.stringify(todos.value));
});

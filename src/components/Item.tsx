import type { Todo } from "../App";
import type { Dispatch, SetStateAction } from "react";
interface ItemProps {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}
export default function Item({ todo, todos, setTodos }: ItemProps) {
  // Toggle completed state
  const toggleCompleted = () => {
    const updated = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
  };
  // Delete todo
  const deleteItem = () => {
    const updated = todos.filter((t) => t.id !== todo.id);
    setTodos(updated);
  };
  return (
    <div className="flex items-center justify-between w-full">
      {/* Task text */}
      <div
        className={`flex-1 text-slate-800 ${
          todo.completed ? "line-through text-slate-400" : ""
        }`}
      >
        {todo.text}
      </div>
      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={toggleCompleted}
          className={`px-3 py-1 rounded-lg border text-sm ${
            todo.completed
              ? "border-yellow-500 text-yellow-600"
              : "border-gray-300 text-gray-600"
          } hover:bg-gray-100 transition`}
        >
          {todo.completed ? "Completed" : "Mark as Completed"}
        </button>
        <button
          onClick={deleteItem}
          className="px-3 py-1 rounded-lg border border-red-600 text-red-600 text-sm hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
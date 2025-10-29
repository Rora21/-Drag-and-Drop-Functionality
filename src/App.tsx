
import React, { useState, useEffect } from "react";
import Form from './components/Form'
import TodoList from "./components/TodoList";
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export default function App() {

  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div className="min-h-screen bg-slate-800 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <div className="bg-rose-100 rounded-2xl shadow-md p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-800">List what to do</h1>
          </div>
          <Form onAdd={addTodo} />
          <div className="mt-6">
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
        
      </div>
    </div>
  );
}
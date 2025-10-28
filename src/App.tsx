
import React, { useState, useEffect } from "react";
import Form from './components/Form'
import TodoList from "./components/TodoList";
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export default function App() {
  // Load todos from localStorage 
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  // Save todos to localStorage
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
            <h1 className="text-2xl font-semibold text-slate-800">To-Do List</h1>
            <p className="text-sm text-slate-500">Drag to reorder</p>
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
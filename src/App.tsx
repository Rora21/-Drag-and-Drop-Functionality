import React, { useState, useRef } from "react";
import TaskItem from "./components/Item";

type Task = {
  id: string;
  text: string;
  done: boolean;
  x: number;
  y: number;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  function addTask() {
    const text = input.trim();
    if (!text) return;
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      done: false,
      x: window.innerWidth / 2 - 130,
      y: 160 + tasks.length * 70,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(id: string) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleMouseDown(e: React.MouseEvent, id: string) {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setDraggingId(id);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!draggingId) return;
    const { x, y } = offset.current;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === draggingId
          ? { ...task, x: e.clientX - x, y: e.clientY - y }
          : task
      )
    );
  }

  function handleMouseUp() {
    setDraggingId(null);
  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-gray-200 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Header + Input */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 text-center z-50">
        <h1 className="text-4xl font-bold text-gray-100 mb-4 drop-shadow-lg tracking-wide">
          List what you want to do
        </h1>
        <div className="flex gap-2 justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a new task..."
            className="bg-gray-800/80 text-gray-100 border border-gray-700 rounded-lg px-4 py-2 w-72 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
          />
          <button
            onClick={addTask}
            className="bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:from-emerald-500 hover:to-green-400 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Draggable Task Items */}
      {tasks.map((task) => (
        <div
          key={task.id}
          onMouseDown={(e) => handleMouseDown(e, task.id)}
          className={`absolute cursor-grab active:cursor-grabbing transition-transform ${
            draggingId === task.id
              ? "scale-105 shadow-2xl"
              : "shadow-lg hover:scale-[1.02]"
          }`}
          style={{
            left: task.x,
            top: task.y,
          }}
        >
          <TaskItem
            id={task.id}
            text={task.text}
            done={task.done}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        </div>
      ))}

      
    </div>
  );
}

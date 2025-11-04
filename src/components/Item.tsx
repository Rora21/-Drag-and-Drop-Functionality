import React from "react";
type TaskItemProps = {
  id: string;
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
};
export default function TaskItem({
  text,
  done,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <li
      className="flex justify-between items-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3 w-64 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={done}
          onChange={onToggle}
          className="w-4 h-4 accent-sky-500"
        />
        <span
          className={`text-base ${
            done
              ? "line-through text-slate-400"
              : "text-slate-800 font-medium"
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
          🗑️
      </button>
    </li>
  );
}
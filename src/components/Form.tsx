import { useState } from "react";
interface FormProps {
  onAdd: (text: string) => void;
}
export default function Form({ onAdd }: FormProps) {
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    onAdd(trimmed);  
    setInput("");    
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="flex flex-col sm:flex-row gap-2 mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnterKey}
        placeholder="Enter a task"
        className="flex-1 border border-slate-800 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900 w-full sm:w-auto"
      />
      <button
        onClick={handleSubmit}
        className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition w-full sm:w-auto"
      >
        Add
      </button>
    </div>
  );
}
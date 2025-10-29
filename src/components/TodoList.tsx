import React from "react";
import type { Todo } from "../App";
import  { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import Item from "./Item";
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default function TodoList({ todos, setTodos }: TodoListProps) {
 
  const handleDragFree = (result: DropResult) => {
    if (!result.destination) return;
    const updatedTodos = Array.from(todos);
    const [movedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, movedItem);
    setTodos(updatedTodos);
  };
  return (
    <DragDropContext onDragEnd={handleDragFree}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="space-y-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm flex items-center justify-between ${
                      snapshot.isDragging ? "bg-blue-50 shadow-md" : ""
                    }`}
                  >
                    <Item todo={todo} todos={todos} setTodos={setTodos} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
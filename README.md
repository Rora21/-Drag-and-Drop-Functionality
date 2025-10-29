Fully Interactive React To-Do List

A fully interactive To-Do List web application built with React and Tailwind CSS. This project demonstrates state management, DOM manipulation, and UX best practices by allowing users to add, delete, and reorder tasks dynamically using drag-and-drop functionality.

Objective

Design and implement a To-Do List application that allows users to:

Create new tasks.

Display tasks clearly in a vertical list.

Delete tasks.

Reorder tasks via drag-and-drop.

Maintain smooth UX with responsive design and clean UI.

Features

Add Task: Users can add new tasks via an input field and “Add” button. Blank inputs are not accepted.

Display Tasks: Tasks appear in a clean vertical list with clear separation. Each task includes its name and a delete button.

Delete Task: Users can remove any task by clicking the delete button.

Reorder Tasks: Tasks can be dragged and dropped to reorder. Dropping a task swaps positions cleanly with no duplicates or blank spaces.

Responsive Design: Works across different screen sizes with good spacing, alignment, and hover/drag animations.

Tech Stack

Frontend: React (JSX)

Styling: Tailwind CSS

Development Tool: Vite

Storage: Browser Local Storage (optional for persistence)

Installation & Usage

Clone the repository:

git clone <your-repo-url>
cd todo-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at http://localhost:5173
 to use the app.

Folder Structure
todo-app/
 ┣ vite.config.js
 ┣ package.json
 ┣ index.html
 ┣ src/
 ┃ ┣ main.jsx          # Entry point
 ┃ ┣ App.jsx           # Main App component
 ┃ ┣ index.css         # Tailwind CSS imports
 ┃ ┗ components/
 ┃   ┗ TodoApp.jsx     # To-Do List component with drag-and-drop

Future Improvements

Enhance drag-and-drop animations.

Add task editing feature.

Add task completion toggle.

Sort tasks by priority or date.

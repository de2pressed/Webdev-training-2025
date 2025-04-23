import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Watch Neeraj Pepsu workout videos", completed: true },
    { id: 2, text: "Listen to Neeraj Pepsu podcast", completed: false },
    { id: 3, text: "pray for Neeraj Pepsu", completed: false },
    { id: 4, text: "listen to Neeraj Pepsu music", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("All"); // All | Active | Completed

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const newItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, newItem]);
    setNewTodo("");
  };

  const handleToggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-pink-700 text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold tracking-[0.5em] mb-8">TODO</h1>

      <div className="w-full max-w-xl space-y-4">
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 outline-none"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </form>

        <div className="bg-gray-900 rounded-md shadow-lg">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center justify-between px-4 py-3 border-b border-gray-800 ${
                todo.completed ? "opacity-50 line-through" : ""
              }`}
            >
                
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  className="form-checkbox h-5 w-5 text-purple-500"
                />
                <span>{todo.text}</span>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-400">
            <span>{todos.filter((t) => !t.completed).length} items left</span>
            <div className="space-x-3">
              {["All", "Active", "Completed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`hover:text-white ${
                    filter === f ? "text-white font-bold" : ""
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <button onClick={handleClearCompleted} className="hover:text-white">
              Clear Completed
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-300 mt-4">
          Drag and drop to reorder list (feature coming soon)
        </p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Column from "./Column";
import logo from '../assets/logo.png';

const defaultColumns = [
  { id: "todo", title: "قائمة المهام", next: "in-progress" },
  { id: "in-progress", title: "قيد التنفيذ", prev: "todo", next: "review" },
  { id: "review", title: "قيد المراجعة", prev: "in-progress", next: "done" },
  { id: "done", title: "تمت", prev: "review" },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState(defaultColumns);
  const [tasks, setTasks] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("kanban-tasks");
    if (stored) setTasks(JSON.parse(stored));

    const darkStored = localStorage.getItem("dark-mode");
    setDarkMode(darkStored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  const handleAddTask = (columnId, task) => {
    const newTasks = {
      ...tasks,
      [columnId]: [...(tasks[columnId] || []), task],
    };
    setTasks(newTasks);
  };

  const handleMoveTask = (fromId, toId, taskIndex) => {
    const task = tasks[fromId][taskIndex];
    const updatedFrom = [...tasks[fromId]];
    updatedFrom.splice(taskIndex, 1);

    const updatedTo = [...(tasks[toId] || []), task];

    setTasks({
      ...tasks,
      [fromId]: updatedFrom,
      [toId]: updatedTo,
    });
  };

  const toggleDark = () => setDarkMode(!darkMode);

  const filteredTasks = (columnId) => {
    return (tasks[columnId] || []).filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="flex h-screen dark:text-zinc-300">
      {/* Sidebar */}
      <div className={` dark:bg-zinc-800 p-4 w-64 transition-all duration-300 ${sidebarOpen ? "block" : "hidden md:block"}`}>
        <div className="mb-6">
    <img src={logo} alt="الشعار" className="w-32 mx-auto" />
  </div>
        <span className="text-2xl font-bold mb-6">اسم الشركة سمارت لايف </span>
        <ul className="space-y-3">
          <li><a href="#" className="hover:text-blue-400">الرئيسية</a></li>
          <li><a href="#" className="hover:text-blue-400">المهام</a></li>
          <li><a href="#" className="hover:text-blue-400">الإعدادات</a></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 p-4 overflow-auto">
        {/* Top menu */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-xl">☰</button>
          <input
            type="text"
            placeholder="🔍 بحث عن مهمة..."
            className="px-4 py-2 rounded border w-full max-w-xs text-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="ml-4 px-4 py-2 bg-zinc-800 text-white rounded"
            onClick={toggleDark}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Kanban Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {columns.map((col) => (
            <Column
              key={col.id}
              column={col}
              tasks={filteredTasks(col.id)}
              onAddTask={handleAddTask}
              onMoveTask={handleMoveTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
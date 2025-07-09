import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";

const Column = ({ column, tasks, onAddTask, onMoveTask }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg text-zinc-800 dark:text-white">
          {column.title} ({tasks.length})
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
        >
          +
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task, idx) => (
          <TaskCard
            key={idx}
            task={task}
            onMoveLeft={() => onMoveTask(column.id, column.prev, idx)}
            onMoveRight={() => onMoveTask(column.id, column.next, idx)}
          />
        ))}
      </div>

      {showModal && (
        <TaskModal
          onClose={() => setShowModal(false)}
          onSubmit={(newTask) => {
            onAddTask(column.id, newTask);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Column;
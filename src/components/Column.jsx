import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskModal from "./TaskModal";
import plusIcon from '../assets/plus.svg';

const Column = ({ column, tasks, onAddTask, onMoveTask }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg text-zinc-800 dark:text-white">
          {column.title} ({tasks.length})
        </h2>
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

        <button
          onClick={() => setShowModal(true)}
          className="w-full justify-content-between mt-3 border-2 border-dashed border-gray-300 dark:bg-zinc-700 rounded-xl p-4 text-right shadow-sm hover:shadow-md transition text-blue-600 hover:bg-blue-50 dark:hover:bg-zinc-600"
        >
        
          
          <div className="flex justify-center items-center gap-1">
                        <img src={plusIcon} alt="إضافة" className="w-4 h-4" />

            <span className="text-sm font-medium text-gray-700	dark:text-white	">إضافة المهمة</span>
          </div>
        </button>
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

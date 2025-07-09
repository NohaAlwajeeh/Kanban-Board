import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-700 p-3 rounded-lg shadow">
      <h3 className="font-semibold text-gray-800 dark:text-white">
        {task.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-zinc-300">{task.description}</p>
    </div>
    
  );
};

export default TaskCard;
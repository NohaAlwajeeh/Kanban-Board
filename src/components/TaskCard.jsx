import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-gray-100 dark:bg-zinc-700 p-4 rounded-lg shadow-sm text-right">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800 dark:text-white text-sm">
          {task.title || "عنوان المهمة"}
        </h3>
                <BsThreeDotsVertical className="text-gray-500 dark:text-gray-300 text-lg" />

      </div>

      <p className="text-sm text-gray-600 dark:text-zinc-300 mb-3 line-clamp-3">
        {task.description || "شرح مختصر للمهمة"}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
               <span>{task.date || "24/12/04 08:22 PM"}</span>

        <div className="flex items-center gap-1">
          <FiPaperclip className="text-base" />
          <span>{task.attachments || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

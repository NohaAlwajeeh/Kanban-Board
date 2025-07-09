import React, { useState } from "react";

const TaskModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">إضافة مهمة</h2>
        <input
          type="text"
          placeholder="عنوان المهمة"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="الوصف"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            إلغاء
          </button>
          <button
            onClick={() => onSubmit({ title, description })}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            إضافة
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
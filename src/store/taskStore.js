
import { create } from 'zustand'

const useTaskStore = create((set) => ({
  columns: {
    todo: { id: 'todo', title: 'قائمة المهام', tasks: [] },
    inProgress: { id: 'inProgress', title: 'قيد العمل', tasks: [] },
    review: { id: 'review', title: 'قيد المراجعة', tasks: [] },
    done: { id: 'done', title: 'تمت', tasks: [] },
  },
  addTask: (columnId, task) =>
    set((state) => {
      const updated = {
        ...state.columns[columnId],
        tasks: [...state.columns[columnId].tasks, task]
      }
      return {
        columns: {
          ...state.columns,
          [columnId]: updated
        }
      }
    }),
}))

export default useTaskStore

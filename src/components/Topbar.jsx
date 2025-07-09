
import { CSVLink } from 'react-csv'
import useTaskStore from '../store/taskStore'

function Topbar({ search, setSearch, dark, setDark }) {
  const columns = useTaskStore((state) => state.columns)
  const allTasks = Object.values(columns).flatMap(col =>
    col.tasks.map(t => ({ ...t, الحالة: col.title }))
  )

  return (
    <header className="bg-white dark:bg-darkCard px-6 py-4 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-xl font-bold text-primary">لوحة تنظيم المهام</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
        <div className="relative w-full md:w-64">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <img src="/assets/search.svg" alt="Search" className="w-4 h-4" />
  </div>
  <input
    type="text"
    placeholder="ابحث..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="pl-10 pr-2 py-2 border rounded text-sm w-full"
  />
</div>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} />
          الوضع الليلي
        </label>
        <CSVLink data={allTasks} filename="tasks.csv" className="text-sm text-primary underline">
          📤 تصدير المهام
        </CSVLink>
      </div>
    </header>
  )
}

export default Topbar

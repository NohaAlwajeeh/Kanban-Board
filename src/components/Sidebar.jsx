
function Sidebar() {
  return (
    <aside className="bg-white dark:bg-darkCard w-60 p-4 shadow hidden md:block">
      <h2 className="text-lg font-bold text-primary mb-4">القائمة</h2>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-primary cursor-pointer">🏠 الرئيسية</li>
        <li className="hover:text-primary cursor-pointer">📝 المهام</li>
        <li className="hover:text-primary cursor-pointer">⚙️ الإعدادات</li>
      </ul>
    </aside>
  )
}

export default Sidebar

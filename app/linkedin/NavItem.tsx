function NavItem({ icon, label, active }) {
  return (
    <button className={`flex flex-col items-center px-2 py-1 rounded hover:bg-gray-100 transition-colors ${
      active ? 'text-black' : 'text-gray-500'
    }`}>
      {icon}
      <span className="text-xs mt-1">{label}</span>
      {active && <div className="h-0.5 w-full bg-black mt-1 rounded-full" />}
    </button>
  )
}

export default NavItem; 
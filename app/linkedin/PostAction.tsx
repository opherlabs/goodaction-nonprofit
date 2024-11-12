function PostAction({ icon, label }) {
    return (
      <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded transition-colors">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </button>
    )
  }

  export default PostAction;    
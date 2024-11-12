function ProfileStat({ label, value, change }) {
    return (
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{value}</span>
          <span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
            {change}
          </span>
        </div>
      </div>
    )
  }

  export default ProfileStat;   
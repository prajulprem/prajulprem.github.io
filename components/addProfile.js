const AddProfile = () => (
  <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md h-48">
    <button className="flex flex-col items-center justify-center text-gray-500">
      <div className="bg-gray-200 rounded-full p-4 mb-2">
        <svg
          xmlns="profile.png"
          className="h-8 w-8 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <p className="text-sm">Add Profile</p>
    </button>
  </div>
);

export default AddProfile;

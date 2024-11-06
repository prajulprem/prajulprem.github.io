import { FaBell } from 'react-icons/fa';

const Navbar = () => (
  <div className="flex items-center justify-between bg-white p-4 shadow-md">
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 rounded-lg p-2 w-1/3"
    />
    <div className="flex items-center space-x-4">
      <FaBell className="text-gray-500" size={20} />
      <img
        src="/path/to/avatar.jpg" // Replace with your avatar image path
        alt="User Avatar"
        className="h-8 w-8 rounded-full"
      />
    </div>
  </div>
);

export default Navbar;
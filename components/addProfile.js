import React, { useState } from 'react';

const AddProfileModal = ({ onClose }) => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    youtube: '',
  });

  const [activeTab, setActiveTab] = useState('basic');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onClose(); // Close the modal on successful submission
      } else {
        console.error('Error submitting profile data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Profile</h2>
        <div className="flex justify-between border-b">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-2 ${activeTab === 'basic' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-2 ${activeTab === 'social' ? 'border-b-2 border-blue-500' : 'text-gray-500'}`}
          >
            Social
          </button>
        </div>

        {activeTab === 'basic' && (
          <div className="mt-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
            />
            <button
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded"
              onClick={() => setActiveTab('social')}
            >
              Next
            </button>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="mt-4">
            <input
              type="url"
              name="instagram"
              placeholder="Instagram Link (Optional)"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
            />
            <input
              type="url"
              name="youtube"
              placeholder="YouTube Link (Optional)"
              value={formData.youtube}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-2"
            />
            <button
              className="w-full bg-gray-300 py-2 mt-4 rounded"
              onClick={() => setActiveTab('basic')}
            >
              Back
            </button>
            <button
              className="w-full bg-blue-500 text-white py-2 mt-2 rounded"
              onClick={handleSubmit} // Call the handleSubmit function to send data
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const AddProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md h-48">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex flex-col items-center justify-center text-gray-500"
      >
        <div className="bg-gray-200 rounded-full p-4 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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

      {isModalOpen && <AddProfileModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default AddProfile;

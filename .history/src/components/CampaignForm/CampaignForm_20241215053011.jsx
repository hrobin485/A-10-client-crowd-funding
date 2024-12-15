import React, { useState } from 'react';

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    type: '',
    description: '',
    minDonation: '',
    deadline: '',
    userEmail: 'user@example.com', // Replace with actual user email dynamically
    userName: 'John Doe', // Replace with actual user name dynamically
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Campaign Added Successfully!');
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="lg:grid grid-cols-2 max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Create a Campaign
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Campaign Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter campaign title"
            required
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            Campaign Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter campaign description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Minimum Donation Amount */}
        <div>
          <label htmlFor="minDonation" className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            id="minDonation"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter minimum donation amount"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* User Email */}
        <div>
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-2">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Add Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;

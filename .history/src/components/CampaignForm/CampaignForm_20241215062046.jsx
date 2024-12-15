import React, { useState } from 'react';

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    type: '',
    description: '',
    minDonation: '',
    deadline: '',
    userEmail: 'user@example.com', // Replace with dynamic user email
    userName: 'John Doe', // Replace with dynamic user name
  });

  // Handle individual field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update only the field being edited
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Campaign updated successfully!');
    // Add API call logic here for saving updates
  };

  // Handle updating the entire form data (e.g., with existing data)
  const updateFormData = (newData) => {
    setFormData(newData); // Replace the entire form data object
  };

  // Example function to simulate loading data (use actual API calls in real apps)
  const loadCampaignData = () => {
    const existingCampaign = {
      image: 'https://via.placeholder.com/150',
      title: 'Example Campaign',
      type: 'startup',
      description: 'This is a description of the campaign.',
      minDonation: '50',
      deadline: '2024-12-31',
      userEmail: 'user@example.com',
      userName: 'John Doe',
    };
    updateFormData(existingCampaign); // Update form with existing data
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update Campaign</h2>
      <button
        onClick={loadCampaignData}
        className="mb-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Load Existing Campaign Data
      </button>
      <form onSubmit={handleSubmit}>
        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Campaign Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Campaign Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Campaign Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
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
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Minimum Donation Amount */}
        <div className="mb-4">
          <label htmlFor="minDonation" className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            id="minDonation"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-1">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
          />
        </div>

        {/* User Name */}
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Update Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;

import React, { useState } from 'react';

const CampaignForm = () => {

    const handleAddCampaign =event=>{
        event.preventDefault()
    
        const form = event.target ;
    
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
        const name = form.name.value
    
    
    };

   

  

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Create a Campaign
      </h2>
      <form onSubmit={handleAddCampaign} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
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

        {/* Minimum Donation Amount */}
        <div>
          <label htmlFor="minDonation" className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Donation Amount
          </label>
          <input
            type="number"
            id="minDonation"
            name="minDonation"
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
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Description (Spanning Two Columns) */}
        <div className="lg:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter campaign description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Add Button (Spanning Two Columns) */}
        <div className="lg:col-span-2 text-center">
          <input type="submit" value="Add Campaign" className='btn btn-block bg-gray-600'/>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;

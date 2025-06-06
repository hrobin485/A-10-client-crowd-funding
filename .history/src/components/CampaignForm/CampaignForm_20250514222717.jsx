import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/auth"; // Import Firebase auth or your auth system
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";

  const isDarkMode = () => document.documentElement.classList.contains('dark');
const CampaignForm = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    // Fetch logged-in user information from Firebase or your auth system
    const fetchUser = () => {
      const currentUser = auth.currentUser; // Firebase example
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "Anonymous User", // Default if no name is set
          email: currentUser.email || "",
        });
      }
    };

    fetchUser();
  }, []);

  const handleAddCampaign = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const title = form.title.value;
    const type = form.type.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const userEmail = user.email; // Use user email from state
    const userName = user.name; // Use user name from state
    const description = form.description.value;

    const newCampaign = {
      image,
      title,
      type,
      minDonation,
      deadline,
      userEmail,
      userName,
      description,
    };

    console.log(newCampaign);

    // send data to server
    fetch("https://crowdfunding-store-server.vercel.app/campaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Submit',
            text: 'Campaign submitted successfully.',
            icon: 'success',
            background: isDarkMode() ? '#1f2937' : '#fff',
            color: isDarkMode() ? '#f3f4f6' : '#000',
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-5 p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 dark:text-gray-100">
        Create a Campaign
      </h2>
      <form onSubmit={handleAddCampaign} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
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
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
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
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
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
          <label htmlFor="minDonation" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
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
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
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
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={user.email}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user.name}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Description */}
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

        {/* Add Button */}
        <div className="lg:col-span-2 text-center">
          <input type="submit" value="Add Campaign" className="btn btn-block bg-gray-400" />
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;

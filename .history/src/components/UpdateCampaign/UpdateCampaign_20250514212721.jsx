import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const isDarkMode = () => document.documentElement.classList.contains('dark');

const UpdateCampaign = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    fetch(`https://crowdfunding-store-server.vercel.app/campaign/${id}`)
      .then(res => res.json())
      .then(data => setCampaign(data))
      .catch(err => console.error("Fetch error:", err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCampaign = {
      title: form.title.value,
      image: form.image.value,
      type: form.type.value,
      minDonation: form.minDonation.value,
      deadline: form.deadline.value,
      description: form.description.value,
      userEmail: campaign.userEmail,
      userName: campaign.userName
    };

    try {
      const res = await fetch(`http://localhost:5000/campaign/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCampaign),
      });

      if (res.ok) {
        Swal.fire({
          title: 'Updated!',
          text: 'Campaign updated successfully.',
          icon: 'success',
          background: isDarkMode() ? '#1f2937' : '#fff',
          color: isDarkMode() ? '#f3f4f6' : '#000',
        });
        navigate("dashboard/my-campaigns");
      } else {
        const error = await res.json();
        throw new Error(error.message || "Failed to update");
      }
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  if (!campaign) return <p className="text-center mt-10 dark:text-gray-100">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-5 p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 dark:text-gray-100">
        Update Campaign
      </h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Image URL</label>
          <input type="text" id="image" name="image" defaultValue={campaign.image} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Title</label>
          <input type="text" id="title" name="title" defaultValue={campaign.title} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>

        {/* Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Campaign Type</label>
          <select id="type" name="type" defaultValue={campaign.type} required className="w-full border border-gray-300 rounded-lg px-4 py-2">
            <option value="">Select Type</option>
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Min Donation */}
        <div>
          <label htmlFor="minDonation" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Minimum Donation</label>
          <input type="number" id="minDonation" name="minDonation" defaultValue={campaign.minDonation} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>

        {/* Deadline */}
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Deadline</label>
          <input type="date" id="deadline" name="deadline" defaultValue={campaign.deadline?.split("T")[0]} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Email</label>
          <input type="email" id="userEmail" name="userEmail" value={campaign.userEmail} readOnly className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100" />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Name</label>
          <input type="text" id="userName" name="userName" value={campaign.userName} readOnly className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100" />
        </div>

        {/* Description */}
        <div className="lg:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">Description</label>
          <textarea id="description" name="description" defaultValue={campaign.description} rows="4" required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2 text-center">
          <button type="submit" className="btn btn-block bg-gray-400">Update Campaign</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;

import { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  // Get current user email
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user?.email) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch campaigns by user email
  useEffect(() => {
    if (!userEmail) return;

    const fetchCampaigns = async () => {
      try {
        const res = await fetch(
          `https://crowdfunding-store-server.vercel.app/campaign?email=${userEmail}`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        const filtered = data.filter(c => c.userEmail === userEmail);
        setCampaigns(filtered);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [userEmail]);

  // Delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this campaign?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://crowdfunding-store-server.vercel.app/campaign/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (result.deletedCount === 1) {
        setCampaigns((prev) => prev.filter((c) => c._id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">My Campaigns</h1>

      {campaigns.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No campaigns created yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-left">
                <th className="p-3 border dark:border-gray-600">Image</th>
                <th className="p-3 border dark:border-gray-600">Title</th>
                <th className="p-3 border dark:border-gray-600">Type</th>
                <th className="p-3 border dark:border-gray-600">Deadline</th>
                <th className="p-3 border dark:border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="p-3 border dark:border-gray-600">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 border dark:border-gray-600">{campaign.title}</td>
                  <td className="p-3 border dark:border-gray-600">{campaign.type}</td>
                  <td className="p-3 border dark:border-gray-600">
                    {new Date(campaign.deadline).toLocaleDateString("en-GB")}
                  </td>
                  <td className="p-3 border dark:border-gray-600">
                    <button
                      className="px-3 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => alert("Update feature coming soon")}
                    >
                      Update
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleDelete(campaign._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCampaign;

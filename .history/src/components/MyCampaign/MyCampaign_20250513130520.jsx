import { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserCampaigns = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(
          `https://crowdfunding-store-server.vercel.app/campaigns?email=${user.email}`
        );
        const data = await res.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCampaigns();
  }, [user?.email]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign._id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2 dark:text-white">{campaign.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{campaign.type}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCampaign;

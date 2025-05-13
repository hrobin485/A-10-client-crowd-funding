import { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  // ✅ Get currently logged-in user's email
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

  // ✅ Fetch campaigns only for this user
  useEffect(() => {
    if (!userEmail) return;

    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `https://crowdfunding-store-server.vercel.app/campaign?email=${userEmail}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // ✅ Filter campaigns by email match (double check)
        const filtered = data.filter(
          (campaign) => campaign.userEmail === userEmail
        );

        setCampaigns(filtered);
      } catch (err) {
        console.error("Failed to fetch campaigns:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [userEmail]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
        <h1>Loading my campaign.....</h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">My Campaigns</h1>

      {campaigns.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No campaigns created yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2 dark:text-white">
                {campaign.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {campaign.type}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Min Donation: ${campaign.minDonation}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Deadline:{" "}
                {new Date(campaign.deadline).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCampaign;

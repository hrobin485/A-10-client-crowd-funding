import { useEffect, useState } from "react";
import { auth } from "../../Firebase/auth";
import { FaCalendarAlt, FaDonate, FaUser } from "react-icons/fa";

const MyDonations = () => {
  const [donatedCampaigns, setDonatedCampaigns] = useState([]);
  const user = auth.currentUser;
  const userEmail = user?.email;

  useEffect(() => {
    const fetchDonatedCampaigns = async () => {
      try {
        const response = await fetch(
          `https://crowdfunding-store-server.vercel.app/donated?userEmail=${userEmail}`
        );
        const data = await response.json();
        setDonatedCampaigns(data);
      } catch (error) {
        console.error("Error fetching donated campaigns:", error);
      }
    };

    if (userEmail) {
      fetchDonatedCampaigns();
    }
  }, [userEmail]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700 dark:text-blue-300">
        My Donated Campaigns
      </h1>

      {donatedCampaigns.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No donated campaigns found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {donatedCampaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {campaign.image && (
                <img
                  src={campaign.image}
                  alt={campaign.campaignName}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                  {campaign.campaignName}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <FaDonate className="text-green-600" />{" "}
                  <span className="font-semibold">${campaign.amountDonated || "N/A"}</span>
                </p>

                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600" />{" "}
                  {new Date(campaign.donatedAt).toLocaleDateString()}
                </p>

                <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                  <FaUser className="text-purple-600" /> {campaign.userName}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;

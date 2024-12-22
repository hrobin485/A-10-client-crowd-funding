import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase"; // Import Firebase auth
import { useParams } from "react-router-dom";

const MyDonations = () => {
  const [donatedCampaigns, setDonatedCampaigns] = useState([]);
  const user = auth.currentUser; // Get the logged-in user
  const userEmail = user?.email; // Get logged-in user's email

  useEffect(() => {
    const fetchDonatedCampaigns = async () => {
      try {
        const response = await fetch(`https://crowdfunding-store-server.vercel.app/donated?userEmail=${userEmail}`);
        const data = await response.json();
        setDonatedCampaigns(data); // Set the data to state
      } catch (error) {
        console.error("Error fetching donated campaigns:", error);
      }
    };

    if (userEmail) {
      fetchDonatedCampaigns();
    }
  }, [userEmail]); // Dependency array to re-run the effect when userEmail changes

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">My Donated Campaigns</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donatedCampaigns.length > 0 ? (
          donatedCampaigns.map((campaign) => (
            <div key={campaign._id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={campaign.image}
                alt={campaign.campaignName}
                className="rounded-md mb-4 max-h-48 w-full object-cover"
              />
              <h2 className="text-xl font-bold mb-2">{campaign.campaignName}</h2>
              <p className="text-gray-700 mb-2">Donation Amount: ${campaign.amountDonated}</p>
              <p className="text-gray-700 mb-2">Date: {new Date(campaign.donatedAt).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-4">Campaign By: {campaign.userName}</p>
              {/* Add any other information you want to display */}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No donated campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default MyDonations;

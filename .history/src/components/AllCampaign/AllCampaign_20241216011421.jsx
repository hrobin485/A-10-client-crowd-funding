import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  // Fetch all campaigns
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:5000/campaign");
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Campaigns</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Min Donation</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Deadline</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
                <td className="border border-gray-300 px-4 py-2">${campaign.minDonation}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded"
                    onClick={() => navigate(`/CampaignDetail/${campaign._id}`)}
                  >
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;

import { useLoaderData } from "react-router-dom";
import CampaignCard from "../CampaignCard/CampaignCard";

const RunningCampaign = () => {
  const campaigns = useLoaderData();

  // Filter active (non-expired) campaigns
  const filteredCampaigns = campaigns.filter(
    (campaign) => new Date(campaign.deadline) > new Date()
  );

  return (
    <div className="py-10 px-4 md:px-10 bg-gray-50 rounded-xl dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 dark:text-white">
        Running Campaigns
      </h2>

      {filteredCampaigns.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No running campaigns available at the moment.
        </p>
      )}
    </div>
  );
};

export default RunningCampaign;

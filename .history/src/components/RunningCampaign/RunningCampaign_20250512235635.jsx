
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../CampaignCard/CampaignCard";

const RunningCampaign = () => {
  const campaigns = useLoaderData();

  // Filter campaigns with expired deadlines
  const filteredCampaigns = campaigns
    .filter((campaign) => new Date(campaign.deadline) > new Date());

  return (
    <div className="mt-10 mb-10 py-5 rounded-xl dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Running Campaign</h2>
      <div className="gap-x-10 gap-y-5 lg:grid grid-cols-3">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full dark:text-gray-100">
            No expired campaigns available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default RunningCampaign;

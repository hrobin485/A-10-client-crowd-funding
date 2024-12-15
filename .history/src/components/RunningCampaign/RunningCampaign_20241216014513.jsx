import React from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "../CampaignCard/CampaignCard";

const RunningCampaign = () => {
  const campaigns = useLoaderData();

  // Filter campaigns with expired deadlines
  const filteredCampaigns = campaigns
    .filter((campaign) => new Date(campaign.deadline) < new Date())
    .slice(0, 6); // Limit to 6 campaigns

  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-center mb-6">Running Campaign</h2>
      <div className="gap-x-10 gap-y-5 lg:grid grid-cols-3">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No expired campaigns available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default RunningCampaign;

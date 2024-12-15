import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../CampaignCard/campaignCard';

const RunningCampaign = () => {
    const campaigns = useLoaderData()
    return (
        <div>
            <h1>running campaign:{campaigns.length}</h1>
            {
                campaigns.map(campaign => <CampaignCard
                key={campaign._id}
                campaign={campaign}
                > </CampaignCard>)
            }
        </div>
    );
};

export default RunningCampaign;
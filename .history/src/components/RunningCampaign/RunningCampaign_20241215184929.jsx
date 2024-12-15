import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../CampaignCard/campaignCard';

const RunningCampaign = () => {
    const campaigns = useLoaderData()
    return (
        
        <div className='mt-10'>
             <h2 className='text-5xl font-bold text-center mb-6'>Running Campaign</h2> 
            <div className='grid grid-cols-3 space-x-5 space-y-5>
            {
                campaigns.map(campaign => <CampaignCard
                key={campaign._id}
                campaign={campaign}
                > </CampaignCard>)
            }
            </div>
        </div>
    );
};

export default RunningCampaign;
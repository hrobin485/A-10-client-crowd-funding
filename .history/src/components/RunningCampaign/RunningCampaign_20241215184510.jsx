import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampaignCard from '../CampaignCard/campaignCard';

const RunningCampaign = () => {
    const campaigns = useLoaderData()
    return (
        
        <div >
             <h2 className='text-2xl font-bold text-center'>Running Campaign</h2> 
            <div className='grid grid-cols-3 gap-2'>
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
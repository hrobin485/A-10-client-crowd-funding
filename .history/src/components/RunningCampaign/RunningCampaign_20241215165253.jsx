import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RunningCampaign = () => {
    const campaigns = useLoaderData()
    return (
        <div>
            <h1>running campaign:{campaigns.length}</h1>
        </div>
    );
};

export default RunningCampaign;
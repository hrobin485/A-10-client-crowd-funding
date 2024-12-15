import React from 'react';

const CampaignDetail = (campaign) => {
    const {
        image,
        title,
        type,
        minDonation,
        deadline,
        userEmail,
        userName,
        description,
      }=campaign.campaign;
    return (
        <div>
            <h1>detail</h1>
        </div>
    );
};

export default CampaignDetail;
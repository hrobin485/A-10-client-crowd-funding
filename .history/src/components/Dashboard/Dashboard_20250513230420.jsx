import React from 'react';
import AddNewCampaign from '../AddNewCampaign/AddNewCampaign';
import MyCampaign from '../MyCampaign/MyCampaign';
import MyDonations from '../MyDonations/MyDonations';

const Dashboard = () => {
    return (
        <div>
            <div>
                <AddNewCampaign/>
            </div>
            <div>
                <MyCampaign/>
            </div>
            <div>
                <MyDonations/>
            </div>












        </div>
    );
};

export default Dashboard;
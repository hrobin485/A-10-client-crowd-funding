import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './DonationCampaigns.css';  // Make sure to create a separate CSS file

function DonationCampaigns() {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the data from the public folder
    useEffect(() => {
        fetch('/Data.json') // This URL should point to your public folder
            .then((response) => response.json())
            .then((data) => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error loading campaigns');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading campaigns...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="campaigns-container">
            <h1 className='text-2xl font-bold'>Donation Campaigns</h1>
            <div className="campaign-cards">
                {campaigns.map((campaign) => (
                    <div key={campaign.id} className="campaign-card">
                        <img className="campaign-image" src={campaign.image} alt={campaign.title} />
                        <div className="campaign-details">
                            <h2 className="campaign-title">{campaign.title}</h2>
                            <p className="campaign-description">{campaign.description}</p>
                            <p className="campaign-division">Division: {campaign.division}</p>
                            <Link to={`/donationDetail/${campaign.id}`}>
                                <button className="donate-button">Donate Now</button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DonationCampaigns;

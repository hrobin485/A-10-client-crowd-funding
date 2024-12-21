import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CampaignDetail = () => {
  const { id } = useParams(); // Extract campaign ID from the URL
  const [campaign, setCampaign] = useState(null); // State to store campaign data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Fetch campaign details
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`https://crowdfunding-store-server.vercel.app/campaigns/${id}`); // Replace with your API URL
        setCampaign(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load campaign details.");
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="card glass w-full">
        <figure>
          <img className="w-full h-64" src={campaign.image} alt="Campaign" />
        </figure>
        <div className="card-body">
          <h1 className="text-3xl font-bold">{campaign.title}</h1>
          <p className="text-lg">Type: {campaign.type}</p>
          <p className="text-lg">Minimum Donation: ${campaign.minDonation}</p>
          <p className="text-lg">Deadline: {campaign.deadline}</p>
          <p className="text-lg">Description: {campaign.description}</p>
          <p className="text-lg">Creator: {campaign.userName} ({campaign.userEmail})</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CampaignDetail = () => {
  const { id } = useParams(); // Get the campaign ID from the URL
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    // Fetch campaign data by ID
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`/api/campaigns/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error("Error fetching campaign data:", error);
      }
    };
    fetchCampaign();
  }, [id]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  const { title, description, image, type, minDonation, deadline, userEmail, userName } = campaign;

  return (
    <div className="container mx-auto p-6">
      <div className="card glass">
        <figure>
          <img src={image} alt={title} className="w-full h-60 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p><strong>Type:</strong> {type}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Minimum Donation:</strong> ${minDonation}</p>
          <p><strong>Deadline:</strong> {deadline}</p>
          <p><strong>Created By:</strong> {userName} ({userEmail})</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;

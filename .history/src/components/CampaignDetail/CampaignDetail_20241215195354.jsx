import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CampaignDetail = () => {
  const { id } = useParams(); // Fetch the campaign ID from URL
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    // Fetch the campaign details
    axios
      .get(`https://crowdfunding-store-server.vercel.app/campaign/${id}`)
      .then((response) => setCampaign(response.data))
      .catch((error) => console.error("Error fetching campaign details:", error));
  }, [id]);

  const handleDonate = () => {
    const user = JSON.parse(localStorage.getItem("user")); // Assuming user info is stored in localStorage
    if (!user) {
      navigate("/LogIn");
      return;
    }

    const donation = {
      campaignId: id,
      userEmail: user.email,
      userName: user.name,
      donationAmount: 50, // Default donation amount or collect via input
    };

    axios
      .post("https://crowdfunding-store-server.vercel.app/donations", donation)
      .then((response) => {
        alert("Donation successful!");
      })
      .catch((error) => console.error("Error donating:", error));
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{campaign.title}</h1>
      <img src={campaign.image} alt="Campaign" />
      <p>Type: {campaign.type}</p>
      <p>Deadline: {campaign.deadline}</p>
      <p>{campaign.description}</p>
      <button onClick={handleDonate} className="btn btn-primary">
        Donate
      </button>
    </div>
  );
};

export default CampaignDetail;

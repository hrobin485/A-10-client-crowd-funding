import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DonationDetail = () => {
  const { campaignId } = useParams(); // Get campaignId from the URL
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add console log to check the campaignId
    console.log("Fetching campaign details for ID:", campaignId);
    
    // Fetch the data from the public folder
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        // Find the selected campaign based on campaignId
        const selectedCampaign = data.find((c) => c.id === parseInt(campaignId));
        if (selectedCampaign) {
          setCampaign(selectedCampaign);
        } else {
          setError('Campaign not found.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading campaign details:", error);
        setError('Error loading campaign details.');
        setLoading(false);
      });
  }, [campaignId]); // Refetch when campaignId changes

  if (loading) {
    return <p>Loading campaign details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="donation-detail-container">
      <h1 className="text-3xl font-bold">{campaign.title}</h1>
      <p>{campaign.description}</p>
      <p><strong>Status:</strong> {campaign.status}</p>
      <p><strong>Division:</strong> {campaign.division}</p>
      <p><strong>Contact Info:</strong> {campaign.contactInfo}</p>

      {/* Donation Form */}
      <form>
        <div>
          <label>Quantity</label>
          <input type="text" name="quantity" placeholder="Enter quantity" required />
        </div>
        <div>
          <label>Item Type</label>
          <input type="text" name="itemType" placeholder="Enter item type" required />
        </div>
        <div>
          <label>Collection Location</label>
          <input type="text" name="location" placeholder="Enter location" required />
        </div>
        <div>
          <label>Additional Comments</label>
          <textarea name="comments" placeholder="Optional comments" />
        </div>
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonationDetail;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CampaignDetail = () => {
  const { id } = useParams(); // Get the campaign ID from the URL
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(`http://localhost:5000/campaign/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const { title, description, type, deadline, userName, minDonation } = campaign;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>Type: {type}</p>
      <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
      <p>Posted by: {userName}</p>
      <p>Minimum Donation: {minDonation}$</p>
      <p>Description: {description}</p>
      <button className="btn btn-primary">Donate</button>
    </div>
  );
};

export default CampaignDetail;

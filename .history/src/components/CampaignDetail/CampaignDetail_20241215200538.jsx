import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CampaignDetail = () => {
  const { id } = useParams(); // Get the campaign ID from the URL
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(`https://crowdfunding-store-server.vercel.app/campaign/${id}`);
        const data = await response.json();
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
      }
    };

    fetchCampaign();
  }, [id]);

  if (!campaign) {
    return <p>Loading...</p>;
  }

  const { title, description, type, deadline, userName } = campaign;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>Type: {type}</p>
      <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
      <p>Posted by: {userName}</p>
      <p>Description: {description}</p>
      <button className="btn btn-primary">Donate</button>
    </div>
  );
};

export default CampaignDetail;

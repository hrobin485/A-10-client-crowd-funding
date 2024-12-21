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
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Loading campaign details...</p>
      </div>
    );
  }

  const { title, description, type, deadline, userName, minDonation, image } = campaign;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-md mb-6 max-h-72 object-cover w-full"
          />
        )}
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-lg font-semibold text-gray-600">Type:</p>
            <p className="text-lg text-gray-800">{type}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Minimum Donation:</p>
            <p className="text-lg text-gray-800">${minDonation}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Deadline:</p>
            <p className="text-lg text-gray-800">
              {new Date(deadline).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Posted By:</p>
            <p className="text-lg text-gray-800">{userName}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-600">Description:</p>
          <p className="text-lg text-gray-800">{description}</p>
        </div>
        <button className="mt-6 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Donate
        </button>
      </div>
    </div>
  );
};

export default CampaignDetail;

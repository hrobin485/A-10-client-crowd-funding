import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  // Simulating logged-in user (You can replace this with actual auth logic)
  const loggedInUser = {
    email: "testuser@example.com",
    name: "Test User",
  };

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

  const handleDonate = async () => {
    if (!campaign || !loggedInUser) {
      alert("User or campaign details missing!");
      return;
    }

    // Check if the campaign's deadline has passed
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);

    if (campaignDeadline < currentDate) {
      alert("Deadline is over, cannot donate!");
      return;
    }

    const donationData = {
      campaignId: id,
      campaignName: campaign.title,
      userEmail: loggedInUser.email,
      userName: loggedInUser.name,
      donatedAt: new Date(),
    };

    try {
      const response = await fetch("https://crowdfunding-store-server.vercel.app/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Donation successful!");
      } else {
        alert("Failed to donate. Please try again.");
      }
    } catch (error) {
      console.error("Error during donation:", error);
    }
  };

  if (!campaign) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] dark:text-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-4 text-lg">Loading camoaign details...</p>
      </div>
    );
  }

  const { title, description, type, deadline, userName, minDonation, image, userEmail } = campaign;
  const currentDate = new Date();
  const campaignDeadline = new Date(deadline);

  const isDeadlineOver = campaignDeadline < currentDate;

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
            <p className="text-lg text-gray-800">{minDonation}$</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Deadline:</p>
            <p className="text-lg text-gray-800">
              {campaignDeadline.toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Posted By:</p>
            <p className="text-lg text-gray-800">{userName}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Email:</p>
            <p className="text-lg text-gray-800">{userEmail}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-600">Description:</p>
          <p className="text-lg text-gray-800">{description}</p>
        </div>
        <button
          onClick={handleDonate}
          disabled={isDeadlineOver}
          className={`w-full mt-6 ${
            isDeadlineOver
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white"
          } font-bold py-2 px-4 rounded`}
        >
          {isDeadlineOver ? "Deadline is finish, cannot donate" : "Donate"}
        </button>
      </div>
    </div>
  );
};

export default CampaignDetail;

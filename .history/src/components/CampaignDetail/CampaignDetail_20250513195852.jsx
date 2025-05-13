import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";

const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(
          `https://crowdfunding-store-server.vercel.app/campaign/${id}`
        );
        const data = await response.json();
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleDonate = async () => {
    if (!campaign || !user) {
      alert("You must be logged in to donate.");
      return;
    }

    // Check if the campaign's deadline has passed
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);

    if (campaignDeadline < currentDate) {
      alert("Deadline is over, cannot donate!");
      return;
    }

    // Ask the user to enter a donation amount
    const amountStr = prompt("Enter donation amount in USD:");
    const amount = parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const donationData = {
      campaignId: id,
      campaignName: campaign.title,
      type: campaign.type,
      image: campaign.image,
      campaignDescription: campaign.description,
      postedBy: campaign.userName,
      campaignEmail: campaign.userEmail,
      userEmail: user.email,
      userName: user.name || user.displayName || "Anonymous",
      amountDonated: amount,
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
        <p className="mt-4 text-lg">Loading campaign details...</p>
      </div>
    );
  }

  const { title, description, type, deadline, userName, minDonation, image, userEmail } = campaign;
  const currentDate = new Date();
  const campaignDeadline = new Date(deadline);

  const isDeadlineOver = campaignDeadline < currentDate;

  return (
    <div className="container mx-auto p-6 max-w-full   my-5 rounded-lg">
      <div className="bg-white dark:bg-gray-700  rounded-lg shadow-xl p-6 lg:p-10">
        {/* Image section */}
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-md mb-6 max-h-96 object-cover w-full shadow-lg"
          />
        )}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-white">{title}</h1>

        {/* Campaign details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Type:</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{type}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Minimum Donation:</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{minDonation}$</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Deadline:</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {campaignDeadline.toLocaleDateString()}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Posted By:</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{userName}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Email:</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">{userEmail}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">Description:</p>
          <p className="text-lg text-gray-800 dark:text-gray-100">{description}</p>
        </div>

        {/* Donation Button */}
        <button
          onClick={handleDonate}
          disabled={isDeadlineOver}
          className={`w-full py-3 mt-6 rounded-md text-lg font-bold ${isDeadlineOver ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-purple-600 text-white"} transition-all duration-300 hover:scale-105`}
        >
          {isDeadlineOver ? "Deadline is finished, cannot donate" : "Donate Now"}
        </button>
      </div>
    </div>
  );
};

export default CampaignDetail;

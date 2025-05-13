import { useNavigate } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();

  const {
    _id,
    image,
    title,
    type,
    minDonation,
    deadline,
    userEmail,
    userName,
    description,
  } = campaign;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {type}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
          {description}
        </p>

        <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          <p><span className="font-medium">Organizer:</span> {userName}</p>
          <p><span className="font-medium">Deadline:</span> {new Date(deadline).toLocaleDateString()}</p>
          <p><span className="font-medium">Min Donation:</span> ${minDonation}</p>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => navigate(`/CampaignDetail/${_id}`)}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

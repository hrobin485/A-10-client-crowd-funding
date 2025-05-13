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
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold mb-2 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Type: {type}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </p>
        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate(`/CampaignDetail/${_id}`)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;

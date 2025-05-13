import { useNavigate } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();
  const { _id, image, title, type, deadline } = campaign;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span className="font-medium text-gray-700 dark:text-gray-200">Type:</span> {type}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          <span className="font-medium text-gray-700 dark:text-gray-200">Deadline:</span> {new Date(deadline).toLocaleDateString()}
        </p>

        <button
          onClick={() => navigate(`/CampaignDetail/${_id}`)}
          className="mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;

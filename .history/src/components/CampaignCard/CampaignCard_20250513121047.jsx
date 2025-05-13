import { useNavigate } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();
  const { _id, image, title, type, deadline } = campaign;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transform transition duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {type}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          <span className="font-medium">Deadline:</span>{" "}
          {new Date(deadline).toLocaleDateString()}
        </p>

        <button
          onClick={() => navigate(`/CampaignDetail/${_id}`)}
          className="mt-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:opacity-90 transition-all font-medium"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;

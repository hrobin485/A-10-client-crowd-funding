import { useAuth } from '../useAuth'; // Import the custom hook for auth context

const CampaignForm = () => {
  const { user, userName } = useAuth(); // Use useAuth hook to get user data

  const handleAddCampaign = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const title = form.title.value;
    const type = form.type.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const userEmail = user?.email || ''; // Default value from user context
    const userName = userName || ''; // Default value from user context
    const description = form.description.value;

    const newCampaign = {
      image,
      title,
      type,
      minDonation,
      deadline,
      userEmail,
      userName,
      description,
    };

    fetch('https://crowdfunding-store-server.vercel.app/campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCampaign),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Added successful!');
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create a Campaign</h2>
      <form onSubmit={handleAddCampaign} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Other fields */}
        
        {/* User Email */}
        <div>
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-2">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={user?.email || ''}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* User Name */}
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userName || ''}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Description */}
        <div className="lg:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter campaign description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Add Button */}
        <div className="lg:col-span-2 text-center">
          <input type="submit" value="Add Campaign" className="btn btn-block bg-gray-400" />
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;

import React from 'react';
import { useAuth } from '../useAuth';   // ⬅️  adjust the path/name to match your project

const Profile = () => {
  // 1️⃣  Get the current user from your Auth provider / context
  const { user: authUser } = useAuth();          // expects { displayName, email, photoURL } etc.

  // 2️⃣  Merge dynamic + dummy data
  const user = {
    // dynamic
    name: authUser?.displayName || 'Anonymous User',
    email: authUser?.email || 'unknown@example.com',
    profileImage:
      authUser?.photoURL ||
      'https://i.pravatar.cc/150?img=47',

    // dummy / placeholder
    phone: '+88012XXXXXXXX',
    address: 'XXX, XXXXX, XXXXX, XXXXXXXX',
    joinedDate: '20XX-XX-XX',
    role: 'Creator',
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        My Profile
      </h2>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Image */}
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
          />

          {/* Info Section */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.role}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold">Email:</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>{user.phone}</p>
              </div>
              <div>
                <p className="font-semibold">Address:</p>
                <p>{user.address}</p>
              </div>
              <div>
                <p className="font-semibold">Joined On:</p>
                <p>{user.joinedDate}</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

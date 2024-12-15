import React from 'react';
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllCampaign from './components/AllCampaign/AllCampaign';
import AddNewCampaign from './components/AddNewCampaign/AddNewCampaign';
import MyCampaign from './components/MyCampaign/MyCampaign';
import MyDonations from './components/MyDonations/MyDonations';
import { Helmet } from 'react-helmet';
import { UserProvider } from './components/UserProvider/UserProvider';


// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Helmet>
              <title>Home - Crowd Funding</title>
              <meta name="description" content="Welcome to our homepage!" />
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/AllCampaign",
        element: (
          <>
            <Helmet>
              <title>All Campaign - Crowd Funding</title>
              <meta name="description" content="Browse all campaigns." />
            </Helmet>
            <AllCampaign />
          </>
        ),
        loader: () => {
          const data = localStorage.getItem("donationCampaigns");
          if (data) {
            return JSON.parse(data);
          } else {
            return fetch("/data.json")
              .then((response) => response.json())
              .catch((error) => {
                console.error("Error fetching data:", error);
                throw new Error("Failed to load data.");
              });
          }
        },
      },
      {
        path: "/AddNewCampaign",
        element: (
          <>
            <Helmet>
              <title>Add New Campaign - Crowd Funding</title>
              <meta name="description" content="Create a new campaign." />
            </Helmet>
            <PrivateRoute element={<AddNewCampaign />} />
          </>
        ),
      },
      {
        path: "/MyCampaign",
        element: (
          <>
            <Helmet>
              <title>My Campaign - Crowd Funding</title>
              <meta name="description" content="View your campaigns." />
            </Helmet>
            <PrivateRoute element={<MyCampaign />} />
          </>
        ),
      },
      {
        path: "/MyDonations",
        element: (
          <>
            <Helmet>
              <title>My Donations - Crowd Funding</title>
              <meta name="description" content="Track your donations." />
            </Helmet>
            <PrivateRoute element={<MyDonations />} />
          </>
        ),
      },
      {
        path: "/LogIn",
        element: (
          <>
            <Helmet>
              <title>Log In - Crowd Funding</title>
              <meta name="description" content="Log in to your account." />
            </Helmet>
            <Login />
          </>
        ),
      },
      {
        path: "/Register",
        element: (
          <>
            <Helmet>
              <title>Register - Crowd Funding</title>
              <meta name="description" content="Create a new account." />
            </Helmet>
            <Register />
          </>
        ),
      },
      {
        path: "/ForgotPassword",
        element: (
          <>
            <Helmet>
              <title>Forgot Password - Crowd Funding</title>
              <meta name="description" content="Reset your password." />
            </Helmet>
            <ForgotPassword />
          </>
        ),
      },
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider> {/* UserProvider ব্যবহার করুন */}
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

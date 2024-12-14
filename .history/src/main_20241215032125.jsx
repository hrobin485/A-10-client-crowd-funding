import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';


import DonationDetail from './components/DonationDetail/DonationDetail';
import { Helmet } from 'react-helmet';

import Login from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import AllCampaign from './components/AllCampaign/AllCampaign';
import AddNewCampaign from './components/AddNewCampaign/AddNewCampaign';
import MyCampaign from './components/MyCampaign/MyCampaign';


// Create the router with all the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
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
        element:  (
          <>
            <Helmet>
              <title>All Campaign- Crowd Funding</title>
              <meta name="description" content="Welcome to our homepage!" />
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
        path: 'AddNewCampaign',
        element: (
          <>
            <Helmet>
              <title>Add New Campaign - Crowd Funding</title>
              <meta name="description" content="Your personal dashboard." />
            </Helmet>
            <PrivateRoute element={<AddNewCampaign />} />
          </>
        ),
      },
      {
        path: 'MyCampaign',
        element: (
          <>
            <Helmet>
              <title>My Campaign- Crowd Funding</title>
              <meta name="description" content="Learn more about us." />
            </Helmet>
            <PrivateRoute element={<MyCampaign />} />
          </>
        ),
      },
      
      {
        path: '/LogIn',
        element: (
          <>
            <Helmet>
              <title>Log In - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <Login />
          </>
        ),
      },
      {
        path: '/Register',
        element: (
          <>
            <Helmet>
              <title>Register - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <Register />
          </>
        ),
      },
      {
        path: '/ForgotPassword',
        element: (
          <>
            <Helmet>
              <title>Forgot-Password - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <ForgotPassword />
          </>
        ),
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

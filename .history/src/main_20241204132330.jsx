import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';

import Dashboard from './components/Dashboard/Dashboard';
import HowToHelp from './components/HowToHelp/HowToHelp';
import DonationDetail from './components/DonationDetail/DonationDetail';
import { Helmet } from 'react-helmet';
import DonationCampaigns from './components/DonationCampaigns/DonationCampaigns';
import Login from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


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
              <title>Home - Winter Clothing Donation</title>
              <meta name="description" content="Welcome to our homepage!" />
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/donationCampaigns",
        element: <DonationCampaigns />,
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
        path: 'Dashboard',
        element: (
          <>
            <Helmet>
              <title>Dashboard - Winter Clothing Donation</title>
              <meta name="description" content="Your personal dashboard." />
            </Helmet>
            <Dashboard />
          </>
        ),
      },
      {
        path: 'HowToHelp',
        element: (
          <>
            <Helmet>
              <title>How To Help - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about us." />
            </Helmet>
            <HowToHelp />
          </>
        ),
      },
      {
      path: '/donationDetail/:campaignId',
        element: (
          <>
            <Helmet>
              <title>Donation Detail - Winter Clothing Donation</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <DonationDetail />
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

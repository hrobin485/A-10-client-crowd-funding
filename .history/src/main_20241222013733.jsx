import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import { Helmet } from 'react-helmet';

// import Register from './components/Register/Register';
// import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllCampaign from './components/AllCampaign/AllCampaign';
import AddNewCampaign from './components/AddNewCampaign/AddNewCampaign';
import MyCampaign from './components/MyCampaign/MyCampaign';
import MyDonations from './components/MyDonations/MyDonations';
import CampaignDetail from './components/CampaignDetail/CampaignDetail';
// import { AuthProvider } from './components/AuthContext/AuthContext';
import LogIn from './components/LogIn/LogIn';


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
        loader:() => fetch('https://crowdfunding-store-server.vercel.app/campaign')
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
        loader: () => fetch('https://crowdfunding-store-server.vercel.app/campaign')
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
        path: 'MyDonations',
        element: (
          <>
            <Helmet>
              <title>My Donations- Crowd Funding</title>
              <meta name="description" content="Learn more about us." />
            </Helmet>
            <PrivateRoute element={<MyDonations />} />
          </>
        ),
      },
      
      {
        path: '/LogIn',
        element: (
          <>
            <Helmet>
              <title>Log In - Crowd Funding</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
          <LogIn />
          </>
        ),
      },
      {
        path: '/Register',
        element: (
          <>
            <Helmet>
              <title>Register -Crowd Funding</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            {/* <Register /> */}
          </>
        ),
      },
      {
        path: '/ForgotPassword',
        element: (
          <>
            <Helmet>
              <title>Forgot-Password - Crowd Funding</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            {/* <ForgotPassword /> */}
          </>
        ),
      },
      {
        path: '/CampaignDetail/:id',
        element: (
          <>
            <Helmet>
              <title>Campaign Detail - Crowd Funding</title>
              <meta name="description" content="Learn more about this campaign." />
            </Helmet>
            <PrivateRoute element={<CampaignDetail />} />
          </>
        ),
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

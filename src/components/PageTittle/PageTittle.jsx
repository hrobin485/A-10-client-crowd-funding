import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = 'Default Title';  // Set a default title

    switch (location.pathname) {
      case '/':
        title = 'Home - My Website';
        break;
      case '/AllCampaign':
        title = 'AllCampaign - My Website';
        break;
      case '/AddNewCampaign':
        title = 'AddNewCampaign - My Website';
        break;
      case '/MyCampaign':
        title = 'MyCampaign - My Website';
        break;
        case '/LogIn':
        title = 'LogIn - My Website';
        break;
      default:
        title = 'My Website';  // Default title for other routes
    }

    document.title = title;  // Set the title dynamically
  }, [location]);

  return null;  // This component doesn't need to render anything
};

export default PageTitle;

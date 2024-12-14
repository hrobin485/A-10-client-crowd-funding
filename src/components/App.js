import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        localStorage.setItem("donationCampaigns", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this only runs once after initial render

  return (
    <div>
      <h1>Welcome to the Donation Campaign App</h1>
    </div>
  );
}

export default App;

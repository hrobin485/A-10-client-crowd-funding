import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DonationCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("donationCampaigns");

    if (data) {
      try {
        setCampaigns(JSON.parse(data)); // Load campaigns from local storage
      } catch (e) {
        setError("Failed to load campaigns. Please try again later.");
        console.error("Error parsing campaign data: ", e);
      }
    } else {
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setCampaigns(data);
          localStorage.setItem("donationCampaigns", JSON.stringify(data)); // Save to local storage
        })
        .catch((error) => {
          setError("Failed to load campaigns. Please try again later.");
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {error && (
        <div
          style={{
            color: "red",
            backgroundColor: "#ffe6e6",
            padding: "10px",
            border: "1px solid red",
            borderRadius: "5px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <div
              key={campaign.id}
              style={{
                border: "1px solid #eaeaea",
                borderRadius: "10px",
                padding: "20px",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              {campaign.image && (
                <img
                  src={campaign.image}
                  alt={`Campaign for ${campaign.title}`}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "15px",
                  }}
                />
              )}
              <h3
                style={{
                  fontSize: "1.25rem",
                  color: "#333",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                {campaign.title}
              </h3>
              <p
                style={{
                  color: "#555",
                  fontSize: "1rem",
                  marginBottom: "10px",
                  lineHeight: "1.5",
                }}
              >
                {campaign.description}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#777",
                  marginBottom: "15px",
                }}
              >
                <strong>Division:</strong> {campaign.division}
              </p>
              <Link
                to={`/donationDetail/${campaign.id}`}
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  fontSize: "1rem",
                  color: "#fff",
                  backgroundColor: "#007bff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0056b3";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#007bff";
                }}
              >
                Donate Now
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%", fontStyle: "italic" }}>
            No campaigns available.
          </p>
        )}
      </div>
    </div>
  );
}

export default DonationCampaigns;

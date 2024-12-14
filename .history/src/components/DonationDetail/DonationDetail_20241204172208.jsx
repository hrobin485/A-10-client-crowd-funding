import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DonationDetail = () => {
  const { campaignId } = useParams(); // Get campaignId from the URL
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    quantity: '',
    itemType: '',
    location: '',
    comments: '',
  });

  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const selectedCampaign = data.find((c) => c.id === parseInt(campaignId));
        if (selectedCampaign) {
          setCampaign(selectedCampaign);
        } else {
          setError('Campaign not found.');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Error loading campaign details.');
        setLoading(false);
      });
  }, [campaignId]);
console.log(campaign)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show toast message
    setToastMessage('Thank you! We will reach your destination soon.');

    // Clear form fields
    setFormData({
      quantity: '',
      itemType: '',
      location: '',
      comments: '',
    });

    // Hide toast after 3 seconds
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '50px' }}>Loading campaign details...</p>;
  }

  if (error) {
    return <p style={{ textAlign: 'center', fontSize: '20px', marginTop: '50px', color: 'red' }}>{error}</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Campaign details */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
        {campaign.title}
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '15px' }}>{campaign.description}</p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '10px' }}>
        <strong>Status:</strong> {campaign.status}
      </p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '10px' }}>
        <strong>Division:</strong> {campaign.division}
      </p>
      <p style={{ fontSize: '1rem', color: '#333', marginBottom: '30px' }}>
        <strong>Contact Info:</strong> {campaign.contactInfo}
      </p>

      {/* Toast message */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            minWidth: '300px',
            textAlign: 'center',
          }}
        >
          {toastMessage}
        </div>
      )}

      {/* Donation Form */}
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#444', marginBottom: '15px' }}>Donation Form</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '1rem', color: '#333', marginBottom: '5px' }}>Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="E.g., 2 jackets, 3 blankets"
            required
            style={{
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '1rem', color: '#333', marginBottom: '5px' }}>Item Type</label>
          <input
            type="text"
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            placeholder="E.g., Blanket, Jacket, Sweater"
            required
            style={{
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '1rem', color: '#333', marginBottom: '5px' }}>Collection Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="E.g., House 12, Road 5, Dhanmondi, Dhaka"
            required
            style={{
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '1rem', color: '#333', marginBottom: '5px' }}>Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Optional comments"
            style={{
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              minHeight: '120px',
              transition: 'border-color 0.3s ease',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '20px',
          }}
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationDetail;

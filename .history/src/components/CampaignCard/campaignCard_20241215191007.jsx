

const CampaignCard = (campaign) => {
  console.log(campaign)
  const {
    image,
    title,
    type,
    minDonation,
    deadline,
    userEmail,
    userName,
    description,
  }=campaign.campaign;

    return (
        <div className="card glass w-96">
  <figure>
    <img className="w-full h-44"
      src={image} alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Type: { type}</p>
    <p>Deadline: {deadline}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary onClick={() => navigate(`/campaign/${_id}`)}">See More</button>
    </div>
  </div> 
</div>
    );
};

export default CampaignCard;
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch campaign data by ID
    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const res = await fetch(`https://crowdfunding-store-server.vercel.app/campaign/${id}`);
                const data = await res.json();
                setCampaign(data);
            } catch (err) {
                console.error("Failed to fetch campaign:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchCampaign();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        // Collect data from form
        const updatedCampaign = {
            title: form.title.value,
            image: form.image.value,
            type: form.type.value,
            minDonation: form.minDonation.value,
            deadline: form.deadline.value,
            description: form.description.value,
        };

        // Validate fields
        if (!updatedCampaign.title || !updatedCampaign.minDonation || !updatedCampaign.deadline) {
            Swal.fire("Error!", "Please fill in all required fields.", "error");
            return;
        }

        try {
            const res = await fetch(`https://crowdfunding-store-server.vercel.app/campaign/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCampaign),
            });


            if (res.ok) {
                Swal.fire("Success!", "Campaign updated successfully!", "success");
                navigate("/MyCampaign");
            } else {
                const errorData = await res.json();
                throw new Error(errorData.error || "Update failed");
            }
        } catch (err) {
            Swal.fire("Error!", err.message, "error");
        }
    };



    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!campaign) return <p className="text-center mt-10">Campaign not found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Update Campaign</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input name="title" defaultValue={campaign.title} required className="input w-full" placeholder="Title" />
                <input name="image" defaultValue={campaign.image} required className="input w-full" placeholder="Image URL" />
                <input name="type" defaultValue={campaign.type} required className="input w-full" placeholder="Type" />
                <input name="minDonation" defaultValue={campaign.minDonation} required className="input w-full" placeholder="Minimum Donation" />
                <input type="date" name="deadline" defaultValue={campaign.deadline.split("T")[0]} required className="input w-full" />
                <textarea name="description" defaultValue={campaign.description} required className="textarea w-full" placeholder="Description"></textarea>
                <input type="email" readOnly className="input w-full bg-gray-200" value={campaign.userEmail} />
                <input type="text" readOnly className="input w-full bg-gray-200" value={campaign.userName} />
                <button type="submit" className="btn btn-primary w-full">Update</button>
            </form>
        </div>
    );
};

export default UpdateCampaign;

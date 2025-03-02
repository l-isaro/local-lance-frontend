import { useLocation } from "react-router-dom"
import ApplicationForm from "../components/ApplicationForm"
import { useAuth } from "../contexts/AuthContext";

export default function ProjectDetails() {
    const location = useLocation()
    const {title, description, skills, deadline, highestBid } = location.state || {}
    const { user } = useAuth();
    console.log(location.state)
return (
    <div className="min-h-screen flex flex-col items-center justify-center text-web-gray">
        <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6 text-black">{title}</h1>
            <p className="mb-6 text-lg py-14"> {description}</p>
            <div>
            <p className="mb-6 text-lg "><strong className="text-black">Skills:</strong> {skills || 'N/A'}</p>
            <p className="mb-6 text-lg "><strong className="text-black">Deadline:</strong> {deadline.split('T')[0]}</p>
            <p className="mb-6 text-lg"><strong className="text-black">Highest Bid:</strong> ${highestBid}</p>
            </div>
            {(!user || user.role === "FREELANCER") && (<ApplicationForm />)}
        </div>
    </div>
)
}

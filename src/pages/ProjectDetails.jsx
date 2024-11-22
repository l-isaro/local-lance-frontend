import { useLocation } from "react-router-dom"

export default function ProjectDetails() {
    const location = useLocation()
    const {title, description, skills, deadline, highestBid, id} = location.state || {}
    console.log(location.state)
return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">{title}</h1>
            <p className="mb-6 text-lg text-gray-700 py-14"> {description}</p>
            <div>
            <p className="mb-6 text-lg text-gray-700"><strong>Skills:</strong> {skills || 'N/A'}</p>
            <p className="mb-6 text-lg text-gray-700"><strong>Deadline:</strong> {deadline}</p>
            <p className="mb-6 text-lg text-gray-700"><strong>Highest Bid:</strong> ${highestBid}</p>
            </div>
            <button className="bg-web-blue rounded-full py-2 px-14 text-white text-sm ml-7 font-medium mt-10">Apply</button>
        </div>
    </div>
)
}

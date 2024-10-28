import { NavLink } from "react-router-dom";

export default function WorkCard(props) {
  return (
    <div className="shadow-lg p-4 w-1/4 rounded-lg">
        <img src={props.img} alt="" className="mx-auto"/>
        <h3 className="text-center text-black font-medium text-xl mb-1 mt-5">{props.title}</h3>
        <p className="text-center mb-5">{props.paragraph}</p>
        <div className="flex gap-4">
            <p className="font-medium text-gray-500">Highest bid ${props.highestBid}</p>
            <NavLink to="/" className="text-web-blue underline">Apply now</NavLink>
        </div>
    </div>
  )
}

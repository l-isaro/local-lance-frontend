import { NavLink } from "react-router-dom";

export default function WorkCard(props) {
  console.log(props.id)
  return (
    <div className="shadow-lg p-4 w-60 rounded-lg">
        <img src={props.img} alt="" className="mx-auto"/>
        <h3 className="text-center text-black font-medium text-xl mb-1 mt-5">{props.title}</h3>
        <p className="text-center mb-5">{props.description}</p>
        <div className="flex justify-between">
          <div className="font-medium text-gray-500">
            <p>Highest bid </p>
            <p className="text-center">${props.highestBid}</p>
            </div>
            <NavLink to={`/project/${props.id}`} className="text-web-blue underline" state={props}>Details</NavLink>
        </div>
    </div>
  )
}

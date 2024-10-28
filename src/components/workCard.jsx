import { NavLink } from "react-router-dom";

export default function workCard(props) {
  return (
    <div>
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
        <div>
            <p>Highest bid ${props.highestBid}</p>
            <NavLink to="/" className="text-web-blue underline">Apply now</NavLink>
        </div>
    </div>
  )
}

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between px-24 py-6">
        <h1 className="text-web-gray"><span className="text-web-blue">Local</span>lance</h1>
        <ul className="flex gap-6">
            <NavLink to="/home" className={({isActive}) => isActive ? "text-web-blue" : ""}>Home</NavLink>
            <NavLink to="/home">Find Work</NavLink>
            <NavLink to="/home">Find Freelancers</NavLink>
            <NavLink to="/home">Log In</NavLink>
            <NavLink to="/home">Sign Up</NavLink>
            
        </ul>
        <NavLink to="/home" className="bg-web-blue rounded-3xl py-2 px-4 text-white">Post a project</NavLink>
    </div>
  )
}

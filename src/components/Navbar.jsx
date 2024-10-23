import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-36 my-6 items-center rounded-full bg-white py-2 justify-center mx-28">
        <NavLink to="/" className="text-web-gray text-2xl"><span className="text-web-blue">Local</span>lance</NavLink>
        <ul className="flex gap-8 items-center text-sm">
            <NavLink to="/" className={({isActive}) => isActive ? "text-web-blue" : ""}>Home</NavLink>
            <NavLink to="/home">Find Work</NavLink>
            <NavLink to="/home">Find Freelancers</NavLink>
            <NavLink to="/login" className={({isActive}) => isActive ? "text-web-blue" : ""}>Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/" className="bg-web-blue rounded-full py-2 px-8 text-white text-sm ml-7 font-medium">Post a project</NavLink>
        </ul>
        
    </div>
  )
}

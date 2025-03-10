import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="mb-12">
        <div className="flex gap-4 bg-white flex-col justify-center items-center mx-96 py-10 text-sm">
            <h1 className="text-2xl">Welcome</h1>
            <p>Please enter your details</p>
            <LoginForm />
            <p className="text-sm">Don&apos;t have an account yet? <NavLink className="text-web-blue">Signup</NavLink></p>
        </div>
    </div>
  )
}

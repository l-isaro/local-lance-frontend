import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Input from "./Input";

export default function LoginForm() {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };
  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="text"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <label htmlFor="password">Password</label>
        <Input id="password" type="text" placeholder="Enter password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
        <div className="">
          <input type="checkbox" name="remember" /> Remember me
        </div>
      </div>
      <button
        type="submit"
        className="bg-web-blue text-white rounded-md py-3 px-8 w-80 mt-4"
        onSubmit={handleSubmit}
      >
        Log In
      </button>
    </form>
  );
}

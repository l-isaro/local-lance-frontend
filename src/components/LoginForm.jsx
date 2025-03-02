import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Input from "./Input";
import HideEye from "../assets/HideEye";
import ShowEye from "../assets/ShowEye";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(credentials);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
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
        <div className="relative flex items-center justify-between">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="absolute right-4 rounded-3xl px-3 font-inter"
          >
            {showPassword ? <HideEye /> : <ShowEye />}
          </button>
        </div>
        <div className="">
          <input type="checkbox" name="remember" /> Remember me
        </div>
      </div>
      <button
        type="submit"
        className="bg-web-blue text-white rounded-md py-3 px-8 w-80 mt-4"
        disabled={loading}
      >
        {loading ? "Loading..." : "Log In"}
      </button>
    </form>
  );
}

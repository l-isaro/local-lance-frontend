import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import Input from "./Input";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const { register, login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      register(formData);
      login({ email: formData.email, password: formData.password })
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="role">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="p-3 border rounded-md w-80"
        >
          <option value="">Select role</option>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
        <label htmlFor="confirm password">Confirm Password</label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-web-blue text-white rounded-md py-3 px-8 w-80 mt-4"
      >
        Sign Up
      </button>
    </form>
  );
}

import { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import MaterialUi from "../assets/MaterialUi.png";
import { useAuth } from "../contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";
import useNewProject from "../hooks/useNewProject";

export default function ProjectForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    ownerId: user.sub,
    img: MaterialUi,
    title: "",
    description: "",
    skills: "",
    deadline: "",
    highestBid: "",
  });

  const { createProject } = useNewProject();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createProject({
      ownerId: user.sub,
      title: formData.title,
      description: formData.description,
      skills: formData.skills,
      deadline: new Date(formData.deadline).toISOString(),
      highestBid: Number(formData.highestBid),
    });
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter a title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Enter a description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="skills">Skills Required</label>
        <Input
          id="skills"
          name="skills"
          type="text"
          placeholder="Enter required skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <label htmlFor="deadline">Deadline</label>
        <Input
          id="deadline"
          name="deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
        />

        <label htmlFor="highestBid">Highest Bid</label>
        <Input
          id="highestBid"
          name="highestBid"
          type="number"
          placeholder="Enter the highest bid"
          value={formData.highestBid}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-web-blue text-white rounded-md py-3 px-8 w-80 mt-4"
      >
        Create
      </button>
    </form>
  );
}

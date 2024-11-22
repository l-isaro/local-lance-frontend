import { useEffect, useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import MaterialUi from "../assets/MaterialUi.png";
import { v4 as uuidv4 } from 'uuid';

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    img: MaterialUi,
    title: "",
    description: "",
    status: "active",
    skills: "",
    deadline: "",
    highestBid: "",
  });

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

//   useEffect(() => {
//     localStorage.setItem("projects", JSON.stringify(projects));
//   }, [projects]);

  const handleSubmit = (e) => {
    console.log("we're submiting the form", formData)
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    console.log(savedProjects);
    e.preventDefault();

    const newProject = {
      ...formData,
      createdAt: new Date(),
    };

    // setProjects((prevProjects) => [...prevProjects, newProject]);

    localStorage.setItem("projects", JSON.stringify([...projects, newProject]));

    // Reset form
    setFormData({
      id: "",
      img: MaterialUi,
      title: "",
      description: "",
      status: "active",
      skills: "",
      deadline: "",
      highestBid: "",
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

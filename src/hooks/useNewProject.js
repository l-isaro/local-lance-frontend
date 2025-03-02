import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

export default function useNewProject() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createProject = async (newProjectData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${apiUrl}/projects`, newProjectData);
      setProject(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { project, loading, error, createProject };
}

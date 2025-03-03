import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

const useNewApplication = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const createApplication = async (applicationData) => {
    setLoading(true);
    console.log(applicationData);
    try {
      const response = await axios.post(`${apiUrl}/bids`, applicationData);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { createApplication, loading, error, data };
};

export default useNewApplication;

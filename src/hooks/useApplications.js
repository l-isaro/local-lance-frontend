import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

const useApplications = () => {
  const [applicationsMap, setApplicationsMap] = useState({});
  const [loadingMap, setLoadingMap] = useState({});
  const [errorMap, setErrorMap] = useState({});

  const fetchApplications = async (projectId) => {
    if (!projectId) return [];

    // Return cached applications if available
    if (applicationsMap[projectId]) {
      return applicationsMap[projectId];
    }

    // Mark this project as loading
    setLoadingMap((prev) => ({ ...prev, [projectId]: true }));

    try {
      const response = await axios.get(`${apiUrl}/bids/${projectId}`);
      const applications = response.data;

      // Update the applications map with the new data
      setApplicationsMap((prev) => ({
        ...prev,
        [projectId]: applications,
      }));

      // Clear any errors
      setErrorMap((prev) => ({ ...prev, [projectId]: null }));

      return applications;
    } catch (err) {
      setErrorMap((prev) => ({ ...prev, [projectId]: err }));
      return [];
    } finally {
      setLoadingMap((prev) => ({ ...prev, [projectId]: false }));
    }
  };

  return {
    applicationsMap,
    loadingMap,
    errorMap,
    fetchApplications,
    getApplications: (projectId) => applicationsMap[projectId] || [],
  };
};

export default useApplications;

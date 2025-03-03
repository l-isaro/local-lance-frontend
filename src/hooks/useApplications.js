import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../constants/apiUrl";

const useApplications = () => {
  const [applicationsMap, setApplicationsMap] = useState({});
  const [loadingMap, setLoadingMap] = useState({});
  const [errorMap, setErrorMap] = useState({});

  const fetchApplications = async (projectId) => {
    if (!projectId) return [];

    if (applicationsMap[projectId]) {
      return applicationsMap[projectId];
    }

    setLoadingMap((prev) => ({ ...prev, [projectId]: true }));

    try {
      const response = await axios.get(`${apiUrl}/bids/${projectId}`);
      const applications = response.data;

      setApplicationsMap((prev) => ({
        ...prev,
        [projectId]: applications,
      }));

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

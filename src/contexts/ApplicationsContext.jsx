import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useAuth } from "./AuthContext";

const ApplicationsContext = createContext();

export const ApplicationsProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const storedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(storedApplications);
  }, []);

  const addApplication = (application) => {
    const clientId = user?.clientId; // Get clientId from the user object
  
    const existingApplications = JSON.parse(localStorage.getItem("applications")) || [];
    const updatedApplications = [...existingApplications, { ...application, clientId }];
    localStorage.setItem("applications", JSON.stringify(updatedApplications));
  };

  const getApplications = () => {
    return JSON.parse(localStorage.getItem("applications")) || [];
  };

  const getApplicationsByClient = () => {
    const clientId = user?.clientId; // Get clientId from the user object
  
    const existingApplications = JSON.parse(localStorage.getItem("applications")) || [];
    return existingApplications.filter((app) => app.clientId === clientId);
  };
  

  return (
    <ApplicationsContext.Provider
      value={{
        applications,
        addApplication,
        getApplications,
        getApplicationsByClient,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};
ApplicationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApplications = () => useContext(ApplicationsContext);

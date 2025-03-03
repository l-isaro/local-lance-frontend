import { useAuth } from "../contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";
import useProjects from "../hooks/useProjects";
import useApplications from "../hooks/useApplications";
import { useEffect, useState } from "react";

export default function MyProjects() {
  const { user } = useAuth();
  const { projects } = useProjects();
  const { fetchApplications, applicationsMap, loadingMap } = useApplications();
  const [isLoading, setIsLoading] = useState(true);

  const filteredProjects = projects.filter(
    (project) => project.ownerId === user.sub
  );

  useEffect(() => {
    async function loadAllApplications() {
      if (filteredProjects.length === 0) {
        setIsLoading(false);
        return;
      }

      const promises = filteredProjects.map((project) =>
        fetchApplications(project.id)
      );

      await Promise.all(promises);
      setIsLoading(false);
    }

    loadAllApplications();
  }, [filteredProjects, fetchApplications]);

  if (isLoading) {
    return <div>Loading your projects and applications...</div>;
  }

  return (
    <div className="overflow-x-hidden text-web-gray">
      <section className="px-28 py-16 bg-white">
        <h2 className="text-5xl text-black font-extrabold mb-6">My Projects</h2>
        <p className="mb-12 text-gray-700">
          View and manage the projects you&apos;ve posted and their received
          applications.
        </p>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-xl">
              You haven&apos;t posted any projects yet.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {filteredProjects.map((project) => {
              const applications = applicationsMap[project.id] || [];
              const isLoadingApplications = loadingMap[project.id];
              return (
                <div
                  key={project.id}
                  className="bg-white border rounded-xl shadow-lg p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xl font-medium mb-4 text-web-blue">
                      Applications
                    </h4>
                    {isLoadingApplications ? (
                      <div className="p-4">Loading applications...</div>
                    ) : applications.length === 0 ? (
                      <div className="p-4 text-gray-500">
                        No applications received for this project yet.
                      </div>
                    ) : (
                      <div className="overflow-x-auto scrollbar-hidden">
                        <div className="flex gap-6 w-fit">
                          {applications.map((app) => (
                            <div
                              key={uuidv4()}
                              className="bg-gray-50 rounded-lg p-4 min-w-[250px] shadow-md"
                            >
                              <h5 className="font-semibold text-lg mb-2">
                                {app.fullName}
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p>
                                  <strong>Email:</strong> {app.email}
                                </p>
                                <p>
                                  <strong>Skills:</strong> {app.skills}
                                </p>
                                <p>
                                  <strong>Hourly Rate:</strong> $
                                  {app.hourlyRate}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

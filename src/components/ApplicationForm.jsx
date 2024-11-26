import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { useApplications } from "../contexts/ApplicationsContext";
import { useParams } from "react-router-dom";

export default function ApplicationForm() {
  const {projectId} = useParams()
  console.log(projectId)
  const { addApplication } = useApplications(); // Access the addApplication function
  let [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    professionalTitle: "",
    skills: "",
    portfolioUrl: "",
    hourlyRate: "",
    bio: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.professionalTitle) newErrors.professionalTitle = "Professional Title is required.";
    if (!formData.skills) newErrors.skills = "Skills are required.";
    if (!formData.hourlyRate || isNaN(formData.hourlyRate)) newErrors.hourlyRate = "Hourly rate must be a number.";
    if (!formData.portfolioUrl || !/^https?:\/\//.test(formData.portfolioUrl))
      newErrors.portfolioUrl = "Enter a valid URL starting with http or https.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Create the application object
    const application = {
      ...formData,
      projectId, // Associate the application with the specific project/job
      submittedAt: new Date().toISOString(),
    };

    // Add application to the context
    addApplication(application);

    console.log("Application submitted successfully:", application);

    // Reset form and close dialog
    setFormData({
      fullName: "",
      email: "",
      professionalTitle: "",
      skills: "",
      portfolioUrl: "",
      hourlyRate: "",
      bio: "",
    });
    setErrors({});
    setIsOpen(false);
  };

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="bg-web-blue rounded-full py-2 px-8 text-white text-sm ml-7 font-medium"
      >
        Apply
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-gray-800"
              >
                Submit Your Application
              </DialogTitle>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-lg mx-auto mt-2 text-sm/6 text-gray-600"
              >
                {[
                  { name: "fullName", label: "Full Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "professionalTitle", label: "Professional Title", type: "text" },
                  { name: "skills", label: "Skills", type: "text", placeholder: "E.g., React, JavaScript" },
                  { name: "portfolioUrl", label: "Portfolio URL", type: "url" },
                  { name: "hourlyRate", label: "Hourly Rate", type: "number" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="border rounded w-full p-2"
                    />
                    {errors[name] && (
                      <p className="text-red-500 text-sm">{errors[name]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium">Personal Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                    placeholder="Briefly describe yourself and your experience"
                  />
                </div>
                <div className="mt-4">
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

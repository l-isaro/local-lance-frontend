import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function ApplicationForm() {
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
    console.log("Form Submitted Successfully:", formData);
    // Reset form or handle submission
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
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-lg mx-auto mt-2 text-sm/6 text-web-gray"
              >
                <div>
                  <label className="block text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    name="professionalTitle"
                    value={formData.professionalTitle}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                  {errors.professionalTitle && (
                    <p className="text-red-500 text-sm">
                      {errors.professionalTitle}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">Skills</label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="E.g., React, JavaScript, Node.js"
                    className="border rounded w-full p-2"
                  />
                  {errors.skills && (
                    <p className="text-red-500 text-sm">{errors.skills}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                  {errors.portfolioUrl && (
                    <p className="text-red-500 text-sm">
                      {errors.portfolioUrl}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Hourly Rate
                  </label>
                  <input
                    type="number"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                  {errors.hourlyRate && (
                    <p className="text-red-500 text-sm">{errors.hourlyRate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium">
                    Personal Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                    placeholder="Briefly describe yourself and your experience"
                  />
                </div>
              </form>
              <div className="mt-4">
                <Button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-sm"
                  onClick={close}
                >
                  Submit
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

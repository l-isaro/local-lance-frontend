import ProjectForm from "../components/ProjectForm";

export default function CreateProject() {
  return (
    <div className="mb-12">
        <div className="flex gap-4 bg-white flex-col justify-center items-center mx-96 py-10 text-sm">
            <h1 className="text-2xl">Welcome</h1>
            <p>Please enter your details</p>
            <ProjectForm />
        </div>
    </div>
  )
}

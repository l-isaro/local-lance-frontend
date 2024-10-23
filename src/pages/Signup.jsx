import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div>
        <div className="flex gap-4 bg-white flex-col justify-center items-center mx-96 py-10 text-sm">
            <h1 className="text-2xl">Welcome</h1>
            <p>Please enter your details</p>
            <SignupForm />
        </div>
    </div>
  )
}

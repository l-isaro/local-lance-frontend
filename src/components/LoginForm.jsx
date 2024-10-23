import Input from "./Input";

export default function LoginForm() {
  return (
    <form action="">
                <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <Input type="text" placeholder="Enter your email"/>
                <label htmlFor="">Password</label>
                <Input type="text" placeholder="Enter password"/>
                <div className="">
                <input type="checkbox" name="remember" /> Remember me
                </div>
                </div>
                <button type="submit" className="bg-web-blue text-white rounded-md py-3 px-8 w-80 mt-4">Log In</button>
            </form>
  )
}

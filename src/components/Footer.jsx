import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import location from "../assets/location.png"
import phone from "../assets/phone.png"
import email from "../assets/email.png"

export default function Footer() {
  return (
    <footer className="bg-white flex justify-around text-black text-sm py-20">
      <div className="w-1/5 flex flex-col gap-4">
        <h3 className="text-web-gray text-2xl ">
          <span className="text-web-blue">Local</span>lance
        </h3>
        <p>
          Powerful Freelance Marketplace System with ability to change the
          Users(Freelancers & Clients)
        </p>
        <div className="flex gap-2">
          <img src={instagram} alt="" className="w-5 h-5"/>
          <img src={twitter} alt="" className="w-5 h-5"/>
          <img src={facebook} alt="" className="w-5 h-5"/>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-medium text-lg">For Clients</h3>
        <ul>
            <li>Find freelancers</li>
            <li>Post Project</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">For Freelancers</h3>
        <ul>
            <li>Find work</li>
            <li>Create Account</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Call Us</h3>
        <div className="flex gap-2">
            <img src={location} alt="" className="w-5 h-5"/>
            <p>Rwanda</p>
        </div>
        <div className="flex gap-2">
            <img src={phone} alt="" className="w-5 h-5"/>
            <p>+25070000000</p>
        </div>
        <div className="flex gap-2">
            <img src={email} alt="" className="w-5 h-5"/>
            <p>locallance@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

import Button from "../components/Button";
import remotePicture from "../assets/workingRemotely.png"

export default function Home() {
  return (
    <div>
      <section className="flex items-center">
        <div>
          <div className="mb-12">
            <h2 className="text-5xl mb-6 text-black font-extrabold">Are you looking for Freelancers?</h2>
            <p className="">
              Hire Great Freelancers, Fast. Locallance helps you hire elite
              freelancers at a moment&apos;s notice
            </p>
          </div>
          <div>
            <Button text="Hire a freelancer" />
          </div>
        </div>
        <img src={remotePicture} alt="" className="w-1/2 h-1/2"/>
      </section>
    </div>
  );
}

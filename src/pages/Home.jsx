import Button from "../components/Button";
import remotePicture from "../assets/workingRemotely.png";
import account from "../assets/account.png";
import search from "../assets/search.png";
import apply from "../assets/apply.png";
import Process from "../components/Process";

export default function Home() {
  const processes = [
    {
      img: account,
      title: "Create Account",
      paragraph: "First you have to create an account here",
    },
    {
      img: search,
      title: "Search Work",
      paragraph: "Search the best freelance work here",
    },
    {
      img: apply,
      title: "Save and Apply",
      paragraph: "Apply or save and start your work",
    },
  ];
  const processCards = processes.map((process) => (
    <Process
      img={process.img}
      title={process.title}
      paragraph={process.paragraph}
      key={process.title}
    />
  ));
  return (
    <div>
      <section className="flex items-center px-28">
        <div>
          <div className="mb-12">
            <h2 className="text-5xl mb-6 text-black font-extrabold">
              Are you looking for Freelancers?
            </h2>
            <p className="">
              Hire Great Freelancers, Fast. Locallance helps you hire elite
              freelancers at a moment&apos;s notice
            </p>
          </div>
          <div>
            <Button text="Hire a freelancer" />
          </div>
        </div>
        <img src={remotePicture} alt="" className="w-1/2 h-1/2" />
      </section>
      <section className="bg-white py-10 px-28">
        <div className="flex justify-between rounded-md shadow-xl py-4">{processCards}</div>
      </section>
    </div>
  );
}

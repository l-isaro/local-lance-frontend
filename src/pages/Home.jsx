import Button from "../components/Button";
import remotePicture from "../assets/workingRemotely.png";
import account from "../assets/account.png";
import search from "../assets/search.png";
import apply from "../assets/apply.png";
import Process from "../components/Process";
import stats from "../assets/stats.png";
import MaterialUi from "../assets/MaterialUi.png";
import WorkCard from "../components/workCard";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../contexts/AuthContext";
import useProjects from "../hooks/useProjects";

export default function Home() {
  const { user } = useAuth();
  console.log(user);

  const processes = [
    {
      id: uuidv4(),
      img: account,
      title: "Create Account",
      paragraph: "First you have to create an account here",
    },
    {
      id: uuidv4(),
      img: search,
      title: "Search Work",
      paragraph: "Search the best freelance work here",
    },
    {
      id: uuidv4(),
      img: apply,
      title: "Save and Apply",
      paragraph: "Apply or save and start your work",
    },
  ];
  
const {projects: works} = useProjects()
  const workCards = works.map((work) => (
    <WorkCard
      img={MaterialUi}
      title={work.title}
      description={work.description}
      highestBid={work.highestBid}
      skills={work.skills}
      deadline={work.deadline}
      id={work.id}
      key={work.id}
    />
  ));

  const processCards = processes.map((process) => (
    <Process
      img={process.img}
      title={process.title}
      paragraph={process.paragraph}
      key={process.id}
    />
  ));
  return (
    <div className="overflow-x-hidden">
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
        <div className="flex justify-between rounded-md shadow-xl py-4">
          {processCards}
        </div>
      </section>
      <section
        className="flex px-28 items-center bg-white gap-16 pt-10"
        id="findFreelancers"
      >
        <img src={stats} alt="" className="w-2/5" />
        <div>
          <h2 className="text-5xl text-black mb-8">
            Find The Best <span className="text-web-blue">Freelancers</span>{" "}
            Here
          </h2>
          <p>
            Discover top-tier freelancers with exceptional skills tailored to
            meet your project needs. From creative design to technical
            expertise, connect with professionals ready to bring your vision to
            life. Let’s build something great together!
          </p>
        </div>
      </section>
      <section className="p-28 bg-white">
        <p className="text-2xl mb-3">The latest freelance work!</p>
        <h3 className="text-black font-medium text-4xl mb-12">
          Recently Posted <span className="text-web-blue">Works</span>
        </h3>
        <div className="overflow-x-auto scrollbar-hidden p-2">
          <div className="flex gap-10 w-fit">{workCards}</div>
        </div>
      </section>
      <section className="bg-background-green flex flex-col items-center py-14">
        <h2 className="text-black text-3xl font-medium mb-2">
          Newsletter Subscription
        </h2>
        <p className="text-sm mb-5">
          Subscribe to our newsletter to get new freelance work and projects
        </p>
        <input
          placeholder="Enter your email adress"
          type="email"
          className="p-3 border rounded-md w-96 text-center shadow-md text-black"
        />
        <button className="bg-web-blue py-3 px-8 rounded-md text-white mt-10">
          Subscribe
        </button>
      </section>
    </div>
  );
}

import ProjectRow from "./ProjectRow";
import Reveal from "./Reveal";

type ProjectsSectionProps = {
  animated?: boolean;
};
type Project = {
  name: string;
  description: string;
  image: string;
  github: string | false;
  view: string | false;
  status: boolean;
  date: string;
};
const projects: Project[] = [
  {
    name: "iTrend Commerce",
    description:
      "An app that uses Amazon's SP-API to automate and optimize inventory management for sellers.",
    image: "/img/sp-manager.webp",
    github: false,
    view: false,
    status: true,
    date: "May - 2025",
  },
  {
    name: "Hinez",
    description:
      "Unlock comprehensive efficiency and growth potential. Transform your operations today to boost workforce engagement and productivity.",
    image: "/img/hinez.jpg",
    github: false,
    view: "https://myhinez.com/",
    status: false,
    date: "May - 2024",
  },
  {
    name: "Rugr",
    description:
      "Rugr plays a crucial role in the modern financial ecosystem by facilitating interactions between merchants and related stakeholders.",
    image: "/img/rugr.webp",
    github: false,
    view: "https://rugr.com",
    status: false,
    date: "February - 2025",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website designed to display my development skills and projects.",
    image: "/img/portfolio.webp",
    github: "https://github.com/Akshayp2002/personal-portfolio-angular",
    view: "https://devakshay.vercel.app",
    status: false,
    date: "August - 2024",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone that allows browsing and viewing TV shows using data from an open API, featuring a responsive and user-friendly interface.",
    image: "/img/netflix-cole.webp",
    github: "https://github.com/Akshayp2002/netflix-clone-angular",
    view: "https://netflix-clone-angular2.vercel.app",
    status: false,
    date: "June - 2024",
  },
  // {
  //   name: "Swiftrevel",
  //   description: "Swiftrevel champions frictionless fintech, integrating flawlessly with your existing tools and software to eliminate data silos and streamline your workflow.",
  //   image: "/img/swiftrevel.webp",
  //   github: false,
  //   view: "https://swiftrevel.com",
  //   status: false,
  //   date: "May - 2024",
  // },
  // {
  //   name: "Student 360",
  //   description: "A final year project: A student management portal designed to efficiently manage attendance, grades, student details, and other academic information.",
  //   image: "/img/student360.webp",
  //   github: "https://github.com/Akshayp2002/Student-360",
  //   view: false,
  //   status: false,
  //   date: "April - 2022",
  // },

];


export default function ProjectsSection({ animated = false }: ProjectsSectionProps) {
  const Content = (
    <section className="space-y-16">
      {/* Heading */}
      <div className="px-10">
        <h2 className="font-black leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
            RECENT
          </span>
          <span className="block text-[clamp(3.5rem,7vw,7rem)] text-neutral-500/50">
            PROJECTS
          </span>
        </h2>
      </div>

      {/* Project list */}
      <div className="space-y-12 px-10">
        {projects.map((project) => (
          <ProjectRow
            key={project.name}
            name={project.name}
            description={project.description}
            image={project.image}
            date={project.date}
            github={project.github}
            view={project.view}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );

  if (animated) {
    return (
    <Reveal amount={0.1} margin="0px 0px -10% 0px">
        {Content}
      </Reveal>
    );
  }

  return Content;
}

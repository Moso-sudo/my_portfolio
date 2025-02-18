import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Globe, Github } from "lucide-react";

import chatImage from "../../assets/projects/chat.png";
import turfImage from "../../assets/projects/turf.png";
import foodImage from "../../assets/projects/food.png";
import todoImage from "../../assets/projects/todo.png";
import eStoreImage from "../../assets/projects/estore.png";
import expenseTrackerImage from "../../assets/projects/expense-tracker.png";

interface Project {
  title: string;
 
  technologies: string[];
  links: { type: string; href: string; icon: JSX.Element }[];
  image: string;
}
const projects: Project[] = [
  {
    title: "Turf Spot",
    
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Daisy UI",
      "Redux Toolkit",
      "Redux Persist",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://turf-spot.vercel.app/",
      //   icon: <Globe className="w-8 h-8" />,
      // },
      // {
      //   type: "Source",
      //   href: "https://github.com",
      //   icon: <Github className="w-8 h-8" />,
      // },
    ],
    image: turfImage,
  },
  {
    title: "Expense Tracker",
    
    technologies: [
      "React.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Mantine UI",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://expense-log.vercel.app/",
      //   icon: <Globe className="w-8 h-8" />,
      // },
      // {
      //   type: "Source",
      //   href: "https://github.com/RijoKsd/Expense-Tracker",
      //   icon: <Github className="w-8 h-8" />,
      // },
    ],
    image: expenseTrackerImage,
  },
  {
    title: "Chat Application",
    
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Daisy UI",
      "Socket.io",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://chat-application-in4i.onrender.com/",
      //   icon: <Globe className="w-8 h-8" />,
      // },
      // {
      //   type: "Source",
      //   href: "https://github.com/RijoKsd/Chat-Application",
      //   icon: <Github className="w-8 h-8" />,
      // },
    ],
    image: chatImage,
  },
  {
    title: "Food Delivery App",
    
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Stripe",
      "Zustand",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://food-delivery-app-fe.vercel.app/",
      //   icon: <Globe className="w-8 h-8" />,
      // },
      // {
      //   type: "Source",
      //   href: "https://github.com/RijoKsd/food-delivery-app",
      //   icon: <Github className="w-8 h-8" />,
      // },
    ],
    image: foodImage,
  },
  {
    title: "TODO App",
    
    technologies: [
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Bootstrap",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://todo-app-mern-fe.vercel.app/",
      //   icon: <Globe className="w-8 h-8" />,
      // },
      // {
      //   type: "Source",
      //   href: "https://github.com/RijoKsd/Todo-App-Mern",
      //   icon: <Github className="w-8 h-8" />,
      // },
    ],
    image: todoImage,
  },
  {
    title: "E-Commerce Website",
    
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Daisy UI",
      "Redux Toolkit",
      "Redux Persist",
    ],
    links: [
      // {
      //   type: "Website",
      //   href: "https://react-estore-app.vercel.app/",
      //   icon: <Globe className="w-8 h-8" />,
      // },
      // {
      //   type: "Source",
      //   href: "https://github.com/RijoKsd/E-Store",
      //   icon: <Github className="w-8 h-8" />,
      // },
    ],
    image: eStoreImage,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className=" w-full max-w-6xl  ">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGraduationCap } from "react-icons/fa";
import { BriefcaseIcon, CodeIcon } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
   {
      title: "Bsc. Mathematics & Computer Science",
      company: "I'm currently persuing a Bachelors Degree in Mathematics & Computer science at ",
      location: "Maseno University",
      duration: "August 2019 - Present",
      description: "",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["Mathematics", "Computer Science"],
    },
    {
      title: "Smart Contract Development",
      company: "Web3Clubs",
      location: "Bootstrap Developers with tools and learning resources to build Dapps",
      duration: "March 2022 -date ",
      description:
        "over the years I have developed a strong understanding in Blockchain and its use cases among them being(dApps,DEFI, DAO's, NFTS) even Writting smart contacts in various blockchain ecosystem incluing, Near Blockchain, Cartesi Blockchain-(optimistic rollup layer 2 protocol), Starknet and Lisk. i have as well contributed to already running project on Blockchain and recieved Bounties. simply, i love to write smart contacts for blockchain. ",
        
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: ["cairo for starknet ", "React/Typecsript for developing frontend for smart contracts", "Solidity for Ehereum", "Ethers.js"],
    },
    {
      title: "Rust Development",
      company: "Web3Clubs",
      location: "",
      duration: "March 2022 -date ",
      description:
        "I have have a one year experience in rust. with rust i have used frameworks like; Actix-web(a web framework for building rust applications), askam(used for templating), Diesel(used diesel for especially connecting to prostgresSql database).I find Rust to be a good language of choice for building blockchain based applications since its a safe, fast and robust language. ",
        
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: ["Rust", "Actix-web", "Askama", "Diesel"],
    },
    {
      title: "Open souce contribution",
      company: "Onlydust",
      location: "",
      duration: "March 2022 -date ",
      description:
        "I love love to contribute to open source projects. i began my journey of open source contribution last year and through that you get improve you expertise and even your knowledg",
        
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: ["Rust", "Actix-web", "Askama", "Diesel"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "2020 - 2024",
      description:
        "Developing custom web solutions for various clients, specializing in responsive and dynamic websites.",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 rounded-xl shadow-lg mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        variants={titleVariants}
      >
        Educaion & Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full"
                >
                  {exp.icon}
                </motion.div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.company} | {exp.location}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="mt-2 sm:mt-0">
                  {exp.duration}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

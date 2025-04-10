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
import { LuGraduationCap } from "react-icons/lu";
import { BriefcaseIcon, CodeIcon } from "lucide-react";
import { GiSadCrab } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

const Experience: React.FC = () => {
  const experiences = [
   {
      title: "Bsc. Mathematics & Computer Science",
      company: "I'm currently persuing a Bachelors Degree in Mathematics & Computer science at ",
      location: "Maseno University and will be graduating this year (December, 2025)🎓,  ",
      duration: "August 2019 - Present",
      description: "",
      icon: <LuGraduationCap className="w-6 h-6" />,
      skills: ["Mathematics", "Computer Science"],
    },
    {
      title: "Smart Contract Development",
      company: "Web3Clubs",
      location: "Bootstrap Developers with tools and learning resources to build Dapps",
      duration: "March 2022 -date ",
      description:
        "Over the years, I’ve built a deep understanding of blockchain technology and its real-world use cases, including dApps, DeFi, DAOs, and NFTs. I enjoy writing smart contracts across various ecosystems such as Ethereum, StarkNet, NEAR Protocol, Cartesi (an optimistic rollup Layer 2), and Lisk.I’ve contributed to existing blockchain projects and earned bounties for my work—proof that I don’t just study the tech, I apply it. Simply put, I love writing smart contracts and pushing the limits of what’s possible in decentralized systems.I’m also passionate about sharing knowledge and would love to become a StarkNet smart contract tutor or instructor. I graduated from StarkNet Basecamp III, earning a shiny SPOK 🎉, and I’m also certified as a Smart Contract Developer by the NEAR Blockchain, Lisk Ecosystem(a layer II scalling solution for ethereum). 🥳",
        
      icon: <BriefcaseIcon className="w-6 h-6" />,
      skills: ["cairo for starknet ", "React/Typecsript for developing frontend for smart contracts", "Solidity for Ehereum", "Ethers.js"],
    },
    {
      title: "Rust Development",
      company: "Web3Clubs",
      location: "",
      duration: "March 2024 -date ",
      description:
        "I have one year of hands-on experience with Rust, and it's quickly become one of my favorite languages—especially for building reliable, high-performance blockchain-based applications.In that time, I’ve worked with several powerful Rust frameworks and libraries, including:Actix Web – a fast, lightweight web framework ideal for building scalable APIs and web services,Askama – a type-safe templating engine for rendering dynamic content,Diesel – a robust ORM that I’ve used extensively to interact with PostgreSQL databases.What draws me to Rust is its unique balance of speed, safety, and control. Unlike garbage-collected languages, Rust empowers developers to manage memory manually—but in a safe and predictable way. This results in fewer runtime errors and highly optimized performance, which is critical in blockchain environments where both security and efficiency are non-negotiable.Rust's strong type system, fearless concurrency, and low-level control make it an excellent choice for developing secure, scalable, and robust decentralized systems.",
        
      icon: <GiSadCrab  className="w-6 h-6" />,
      skills: ["Rust", "Actix-web", "Askama", "Diesel"],
    },
    {
      title: "Open souce contribution",
      company: "Onlydust",
      location: "",
      duration: "November 202 -date ",
      description:
        "I'm passionate about contributing to open source projects—it's one of the most rewarding parts of my development journey. I started contributing to open source last year, and it's been an incredible way to sharpen my skills, collaborate with other developers, and deepen my understanding of real-world codebases.Open source isn’t just about code for me—it’s about community, learning, and growing together as developers.",
        
      icon: <FaGithub className="w-6 h-6" />,
      skills: ["Rust", "Actix-web", "Askama", "Diesel"],
    },
    {
      title: "Full stack Web Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "2020 - 2024",
      description:
        "A proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.I believe in waking up each day eager to make a difference!",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      title: "App Developer",
      company: "Self-employed",
      location: "Remote",
      duration: "2020 - 2024",
      description:
        "Currently learning to build applications with React Native.",
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
        Education & Experience
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

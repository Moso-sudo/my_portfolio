import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6  bg-white dark:bg-gray-800 rounded-xl shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="md:w-1/3 mb-4 md:mb-0" variants={imageVariants}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
          
            src="/me.jpg"
            alt="Moses Mulumia"
            className="w-full h-full object-cover object-left-top"
          />
        </motion.div>
      </motion.div>
      <div className="md:w-2/3 md:pl-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center md:text-left"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center md:text-left mb-4"
          variants={itemVariants}
        >
I'm a Smart Contract Developer and Full Stack Web Developer with a strong focus on building decentralized applications and high-performance web solutions. I write smart contracts using Solidity for Ethereum and Cairo for StarkNet, and I build responsive, interactive web applications with ReactJS, TypeScript, and Actix Web, a powerful Rust-based backend framework.

Driven by a passion for blockchain and fintech, I’m always exploring new technologies and tools to stay at the forefront of innovation. My commitment to continuous learning ensures I deliver cutting-edge, secure, and scalable solutions in every project.
        </motion.p>
        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center md:text-left"
          variants={itemVariants}
        >
          I’m also an active supporter of the open-source community—I love contributing to projects, sharing knowledge, and collaborating with others to push the ecosystem forward.


        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;

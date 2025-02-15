import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import BoxReveal from "@/components/magicui/box-reveal";

interface GradientTextProps {
  text:  React.ReactNode;
  className?: string;
}

const WordAnimation: React.FC = () => (
  <div className="flex justify-center">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {Array.from("Hi, I'm Moses mulumia").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  </div>
);

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => (
  <motion.h1
    className={`bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {text}
  </motion.h1>
);

const SubTitle: React.FC = () => (
  // <motion.div
  //   className="w-full text-center mt-4 flex justify-center"
  //   initial={{ opacity: 0, y: 20 }}
  //   animate={{ opacity: 1, y: 0 }}
  //   transition={{ duration: 0.8, delay: 0.4 }}
  // >
    <BoxReveal boxColor="#3b82f6" duration={0.5}>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold  text-center">
      {/* Smart Contract Developer || full Stack web Developer */}
      <ReactTyped strings={['App Developer,' ,'Smart Contract Developer,', 'Web Developer,',]}
                className=' text-orange  fond-large md:text-3xl sm:text-4xl text-xl md:pl-4 pl-2' 
                typeSpeed={50}
                backSpeed={50}
                loop
                />
      </p>
    </BoxReveal>
  // </motion.div>
);

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 gap-10 py-12">
      <div className="text-center my-4">
        <GradientText
          className="font-display text-center font-bold tracking-[-0.05em] text-4xl lg:text-6xl md:p-2"
          text={<WordAnimation />}
        />
        <div className="mt-2 text-center">
          <SubTitle />
        </div>
      </div>
    </div>
  );
};

export default Header;

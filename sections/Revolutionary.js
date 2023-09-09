import React from "react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Revolutionary = () => {
  const expandFromMiddle = {
    hidden: { scaleY: 0, originY: 0.5 },
    show: { scaleY: 1, originY: 0.5, transition: { duration: 1.5 } },
  };
  const rotateUpwards = {
    hidden: { rotateX: -90, opacity: 0 },
    show: { rotateX: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="section" id="section3">
      <div className="flex min-h-screen flex-col justify-center py-8">
        <motion.p
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="text-[30px] text-center tracking-wider"
        >
          REVOLUTIONARY
        </motion.p>
        <div className="container mx-auto flex flex-col md:flex-row my-8 gap-8 justify-around items-center">
          <motion.img
            src='/zimo-logo.png'
            alt="zimo"
            className="w-52 md:w-72"
            initial="hidden"
            whileInView="show"
            variants={rotateUpwards}
          />
          <motion.div
            style={{
              borderLeft: "1px solid #BE9F56",
              borderTop: "1px solid #BE9F56",
            }}
            initial="hidden"
            whileInView="show"
            variants={expandFromMiddle}
            className="h-0 w-52 md:h-[250px] md:w-0 opacity-50"
          />
          <motion.img
            src='/zimo-pro.png'
            alt="zimo pro"
            className="w-52 md:w-72"
            initial="hidden"
            whileInView="show"
            variants={rotateUpwards}
          />
        </div>
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="text-center text-[30px] tracking-wider"
        >
          The only platform of it's kind in the world.
        </motion.p>
        <Link to="section4" spy={true} smooth={true} offset={50} duration={500} className="navigate">      
          <img
            src="/ArrowDark.png"
            alt="arrow-dark"
            height={80}
            width={40}
            className="cursor-pointer z-10 hover:scale-150 hover:brightness-100 animate-bounce hover:animate-ping"
          />
        </Link>
      </div>
    </div>
  );
};

export default Revolutionary;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Page2 = ({ text, section, navigate }) => {
  const rotateUpwards = {
    hidden: { rotateX: -90, opacity: 0 },
    show: { rotateX: 0, opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div className="section bg-black" id={section}>
      <div className=" h-screen flex flex-col justify-center items-center relative text-white ">
        <motion.h4
          initial="hidden"
          whileInView="show"
          variants={rotateUpwards}
          className="text-[16px] lg:text-[25px] uppercase text-white tracking-wider"
        >
          {text}
        </motion.h4>

        <Link
          to={navigate}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="navigate"
        >
          <img
            src="/down-arrow.png"
            alt="arrow-dark"
            height={80}
            width={40}
            className="cursor-pointer z-10 hover:scale-150 hover:brightness-100 animate-bounce hover:animate-ping"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Page2;

import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Page3 = () => {
  const expandAnimation = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };
  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };
  return (
    <div className="section" id="section8">
      <div className="w-full min-h-screen flex justify-center items-center text-center">
        <motion.img
          src="/zimo.png"
          alt=""
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
          className="sm:w-[800px] sm:h-[200px] w-[1600px] h-[488px] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={expandAnimation}
        >
          <h2 className="text-[25px] font-normal uppercase tracking-wider">
            Bringing the world closer together.
          </h2>
          <img className="block mx-auto mt-6" src="/zimo-logo-2.png" alt="" />
        </motion.div>
        <Link
          to="section9"
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
          />
        </Link>
      </div>
    </div>
  );
};

export default Page3;

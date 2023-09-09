import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeInn } from "@/utils/motion";
import Image from "next/image";

const Main = () => {
  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };
  return (
    <div className="section">
      <div className=" container mx-auto h-screen flex justify-between flex-col relative ">
        <motion.img
          src='/zimo.png'
          layout="responsive"
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
          className="sm:w-[800px] sm:h-[200px] w-[1600px] h-[488px] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] bottom-[50%] right-[50%] left-[50%] blur-lg"
        />
        <motion.div
          variants={fadeInn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className=" my-auto gap-y-8 px-20 pt-28 sm:p-0 "
        >
          <img src={`/zimoGroupDark.png`} alt="" className="md:w-[380px] w-[420px] pl-4" />
        </motion.div>
        <div className="arrow space-y-14 flex flex-col items-center justify-center sm:absolute sm:bottom-0 sm:right-0 sm:left-0 pb-8">
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navigate"
          >
            <img
              src={`ArrowDark.png`}
              alt="arrow-dark"
              height={80}
              width={40}
              className="cursor-pointer hover:scale-150 animate-bounce hover:animate-ping "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

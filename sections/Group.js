import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Group = () => {
  const zoomInAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div className="section bg-black " id="section4">
      <div className="container mx-auto min-h-screen py-8 relative ">
        <motion.div
          variants={zoomInAnimation}
          initial="initial"
          whileInView="animate"
          className="services overflow-y-auto "
        >
          <img src='/services.svg' alt="" className="object-contain " />
        </motion.div>
        <img
          src="/zimo-group.png"
          alt=""
          class="absolute blur-sm lg:blur-md "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Link
          to="sectionn1"
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

export default Group;

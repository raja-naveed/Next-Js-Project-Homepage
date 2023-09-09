import React from "react";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Details = [
  {
    imageUrl: "/realestate.jpg",
    title: "REAL ESTATE",
    id: "sectionn1",
    idd: "sectionn2",
     // Add unique IDs for each section
  },
  {
    imageUrl: "/car.jpg",
    title: "CARS",
    id: "sectionn2",
    idd: "sectionn3",
  },
  {
    imageUrl: "/yatch.jpg",
    title: "YATCHS",
    id: "sectionn3",
    idd: "sectionn4",
  },
  {
    imageUrl: "/watch.jpg",
    title: "WATCHES",
    id: "sectionn4",
    idd: "sectionn5",
  },
  {
    imageUrl: "/plane.jpg",
    title: "JETS",
    id: "sectionn5",
    idd: "sectionn6",
  },
  {
    imageUrl: "/island.jpg",
    title: "PRIVATE ISLANDS",
    id: "sectionn6",
    idd: "sectionn7",
  },
  {
    imageUrl: "/diamond.jpg",
    title: "DIAMONDS",
    id: "sectionn7",
    idd: "sectionn8",
  },
  {
    imageUrl: "/travel.jpg",
    title: "TRAVEL THE WORLD",
    id: "sectionn8",
    idd: "section6",
  },
];

const Screens = () => {
  return (
    <>
      {Details.map((item, index) => {
        return (
          <div className="" id={item.id} key={index}>
            {" "}
            {/* Set the ID for the section */}
            <div className="relative">
              <div
                className="min-h-screen flex flex-col justify-center xl:text-center items-center relative px-8 bg-black bg-no-repeat bg-fixed bg-center bg-cover text-white "
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <motion.h4
                  variants={slideIn("left", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  className="text-[40px] uppercase text-white opacity-50 tracking-wider text-center "
                >
                  {item.title}
                </motion.h4>
                {index === 1 && (
                  <motion.div
                    variants={slideIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="absolute w-80 md:w-96 right-7 bottom-5 opacity-40"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <img src="/cars-model.png" alt="" />
                  </motion.div>
                )}
              </div>
              <Link
                to={item.idd} // Set the corresponding section ID as the target
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
      })}
    </>
  );
};

export default Screens;

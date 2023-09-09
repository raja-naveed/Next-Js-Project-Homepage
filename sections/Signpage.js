import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motion";
import { Link } from "react-scroll";

const Signpage = () => {
  return (
    <div className="section" id="section6">
      <div className="container mx-auto min-h-screen flex flex-col justify-between">
        <div>
          <motion.img
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            src='/zdoc.png'
            className="block mx-auto items-center mt-[300px] "
            alt="zdoc."
          />
        </div>
        <motion.div
          variants={slideIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          className="pb-16 md:pb-8 "
        >
          <p className="relative  top-[27px] text-center uppercase  text-[20px] tracking-[2px] text-[#737373] mb-6 px-2">
            Document-signing software technology that lets you sign documents
            online.
          </p>
          <div class="w-[300px] ml-auto mt-16">
            <div class="flex justify-between border-[rgba(0,0,0,0.4)] border-b border-solid pb-2">
              <img src='/zidoc.png' alt="zdoc" className="h-[60px] w-[45px]" />
              <img src='/signatures.png' alt="zdoc" className="h-[90px] w-[200px]" />
            </div>
            <small class="text-[8px] float-right pt-1">
              ZD:SID 46791269900490374129
            </small>
          </div>
        </motion.div>
      </div>
      <Link
        to="section7"
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
  );
};

export default Signpage;

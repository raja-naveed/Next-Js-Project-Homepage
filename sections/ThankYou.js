'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Terms from "./Terms";
import Policies from "./Policies";
import { Link } from 'react-scroll';

const ThankYou = ({ setShow }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [showPolicyPopup, setShowPolicyPopup] = useState(false);

  const imageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };

  const openTermsPopup = () => {
    setIsTermsOpen(true);
    setShow(false);
  };

  const closeTermsPopup = () => {
    setIsTermsOpen(false);
    setShow(true);
  };
  const openPolicyPopup = () => {
    setShowPolicyPopup(true);
    setShow(false);
  };

  const closePolicyPopup = () => {
    setShowPolicyPopup(false);
    setShow(true);
  };

  return isTermsOpen === true ? (
    <Terms closeTermsPopup={closeTermsPopup} />
  ) : showPolicyPopup ? (
    <Policies closePolicyPopup={closePolicyPopup} />
  ) : (
    <div
      className="section "
      id="section12"
      style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
    >
      <div className="container mx-auto flex flex-col h-screen items-center justify-center">
        <div className="">
          <motion.img
            src="/thankyou.svg"
            className="h-[40px] block mx-auto"
            alt=""
            initial="hidden"
            whileInView="visible"
            variants={imageAnimation}
          />
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        exit="hidden"
      >
        <img
          src="/zimo-logo-2.png"
          className="h-[30px]  mx-auto"
          alt=""
        />
        <div className="mt-8 flex justify-center items-center text-center gap-4 font-normal md:gap-8 text-[10px] uppercase tracking-widest pb-12">
          <button
            onClick={() => {
              openTermsPopup();
              document.getElementById("section12").scrollIntoView();
            }}
          >
            TERMS OF SERVICE
          </button>
          <p>© ZIMO GROUP 2023</p>
          <button
            onClick={() => {
              openPolicyPopup();
              document.getElementById("section12").scrollIntoView();
            }}
          >
            PRIVACY POLICY
          </button>
        </div>
      </motion.div>
      <Link
          to="section13"
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
  );
};

export default ThankYou;

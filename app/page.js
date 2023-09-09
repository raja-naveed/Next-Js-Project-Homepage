'use client';
import Contact from "@/sections/Contact";
import Download from "@/sections/Download";
import Email from "@/sections/Email";
import Group from "@/sections/Group";
import Main from "@/sections/Main";
import Page from "@/sections/Page";
import Page2 from "@/sections/Page2";
import Page3 from "@/sections/Page3";
import Revolutionary from "@/sections/Revolutionary";
import Screens from "@/sections/Screens";
import Signpage from "@/sections/Signpage";
import ThankYou from "@/sections/ThankYou";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <>
          <Main />
          <Page />
          <Revolutionary />
          <Group />
          <Screens />
          <Signpage />
          <Page2
            text={`A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE WORLD.`}
            section={`section7`}
            navigate={`section8`}
          />
          <Page3 />
          <Page2
            text={`GLOBAL ACCESS TO REAL ESTATE AND PROPERTY TO EVERYONE .`}
            section={`section9`}
            navigate={`section10`}
          />
          <Download />
          <Email />
        </>
      )}
      <ThankYou setShow={setShow} />
      {/* <Terms/> */}
      {/* <Policies/> */}

      {show && (
        <>
          <Contact />
        </>
      )}
    </>
  );
}

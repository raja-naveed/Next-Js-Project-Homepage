import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Download = () =>
 {

  return (
    <div className="section" id="section10">

      <div class="container mx-auto flex flex-col justify-between items-center min-h-screen gap-8">
        <div>
        &nbsp;</div>
      <div class="flex justify-between gap-8 lg:gap-0 flex-col lg:flex-row lg:items-center">
        <div class="w-[250px] 2xl:w-[400px] 3xl:w-[549px] flex justify-between mx-auto aos-init aos-animate" data-aos="flip-left">
        <img class="w-[90px] 2xl:w-[145px] 3xl:w-[186px]" src="/reac.svg" alt=""/>
        <img class="w-[120px] 2xl:w-[192px] 3xl:w-[246px]" src="/react.svg" alt=""/>
        </div>
      <section class="flex flex-col justify-between items-center text-center gap-16 2xl:h-[600px] 3xl:h-[800px] 3xl:pt-[50px]">
        <img src="/zimo-download.png" alt=""/>
        <div class="tracking-widest">
        <h2 class="text-[25px] lg:text-[30px] 2xl:text-[40px] uppercase">
        DOWNLOAD</h2>
      <p class="uppercase text-[16px] md:text-[20px] mt-3">
        our app</p>
      </div>
      <div>
        <a href="" target="_blank" class="block w-[135px] mx-auto" rel="noreferrer">
        <img src="/android.png" class="h-[45px] w-[135px]" alt=""/>
        </a>
      <a href="" target="_blank" class="block w-[135px] mx-auto" rel="noreferrer">
        <img src="/ios.png" class="h-[45px] w-[135px] mt-4 mb-5" alt=""/>
        </a>
      <p class="lg:text-[12px] text-[9px] lg:tracking-[2px] text-[#BE9F56] my-4 uppercase">
        Get the ZIMO app on a phone or tablet</p>
      <p class="lg:text-[12px] text-[9px] lg:tracking-[2px] opacity-50 uppercase">
        To install ZIMO, follow the link for your device from your smartphone or tablet.</p>
      </div>
      </section>
      <div class="w-[250px] 2xl:w-[400px] 3xl:w-[549px] relative flex mx-auto aos-init aos-animate" data-aos="flip-right">
      <img class="w-[120px] 2xl:w-[192px] 3xl:w-[246px]" src="/react.svg" alt=""/>
        </div>
      </div>
      <p class="pb-12 lg:text-[12px] text-[9px] text-center lg:tracking-[2px] opacity-50 uppercase">
        ZIMO is available on many devices. The ZIMO app may come pre-installed or you may need to download and install it.</p>
      </div>

    </div>

  );
};

export default Download;

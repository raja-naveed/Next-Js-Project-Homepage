'use client';

import React from "react";
import { fadeIn, slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="section13">
      <div
        className="max-w-[1600px] mx-auto px-1 md:px-2 py-4 pt-8"
        style={{ userSelect: "text" }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 2 } },
          }}
          data-aos="fade-down"
        >
          <section className="block lg:hidden mb-8">
            <h2 className="text-center uppercase tracking-widest text-[20px]">
              Contact
            </h2>
          </section>
        </motion.div>

        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-10 min-h-screen relative z-10">
          <section class="flex lg:min-h-[inherit] flex-col justify-between gap-16 col-span-2">
            <motion.div
              className="tracking-widest text-[12px]"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 2 } },
              }}
            >
              <h4>ENQUIRIES</h4>
              <a
                href="mailto:hello@zimogroup.org?subject=Hello - ZIMO GROUP"
                className="mt-1 link"
              >
                hello@zimogroup.org
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 2 } },
              }}
              class=""
            >
              <img
                src="/zimo-group-logo.png"
                class="max-h-[54px] w-auto block mx-auto"
                alt=""
              />
              <img
                src="/zimo-logo-2.png"
                class="max-h-[20px] block mx-auto mt-10"
                alt=""
              />
              <div class="flex flex-col gap-1 text-[10px] text-center mt-2 tracking-widest">
                <p>ZIMO GROUP LIMITED</p>
                <p>
                  71 - 75 &nbsp;&nbsp; SHELTON STREET &nbsp;&nbsp; COVENT
                  GARDEN&nbsp; &nbsp; LONDON &nbsp;&nbsp; WC2H 9JQ &nbsp;&nbsp;
                  ENGLAND &nbsp;&nbsp; UNITED KINGDOM
                </p>
                <div class="flex items-center gap-4 justify-center">
                  <div class="flex items-center gap-2">
                    <img src="/web-logo.svg" alt="" />
                    <a href="#" class="link">
                      ZIMOGROUP.ORG
                    </a>
                  </div>
                  <div class="flex items-center gap-2">
                    <img src="/mail-logo.svg" alt="" />
                    <a
                      class="link"
                      href="mailto:hello@zimogroup.org?subject=Hello - ZIMO GROUP"
                    >
                      HELLO@ZIMOGROUP.ORG
                    </a>
                  </div>
                </div>
                <p>REGISTERED IN ENGLAND &nbsp;&nbsp; 14383397</p>
              </div>
            </motion.div>
            <p class="tracking-widest text-[11px]">
              ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.
              <br />
              The registered office is: 71-75 Shelton Street, Covent Garden,
              London, WC2H 9JQ, England, United Kingdom.
            </p>
          </section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 2 } },
            }}
          >
            <section className="hidden lg:block">
              <h2 className="text-center uppercase tracking-widest text-[20px]">
                Contact
              </h2>
            </section>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 3 } },
            }}
          >
            <section
              class="col-span-2 flex items-start md:items-center justify-start md:justify-around gap-8 lg:gap-4 xl:gap-2 flex-wrap md:flex-nowrap "
            >
              <div class="flex flex-col gap-4">
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">REAL ESTATE</h4>
                  <a
                    href="mailto:realestate@zimogroup.org?subject=Real Estate Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    realestate@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">CARS</h4>
                  <a
                    href="mailto:cars@zimogroup.org?subject=Cars Enquiry - ZIMO GRoup"
                    class="tracking-wider link mt-1"
                  >
                    cars@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">YACHTS</h4>
                  <a
                    href="mailto:yachts@zimogroup.org?subject=Yachts Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    yachts@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">WATCHES</h4>
                  <a
                    href="mailto:watches@zimogroup.org?subject=Watches Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    watches@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">JETS</h4>
                  <a
                    href="mailto:jets@zimogroup.org?subject=Jets Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    jets@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">PRIVATE ISLANDS</h4>
                  <a
                    href="mailto:privateislands@zimogroup.org?subject=Private Islands Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    privateislands@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">DIAMONDS</h4>
                  <a
                    href="mailto:diamonds@zimogroup.org?subject=Diamonds Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    diamonds@zimogroup.org
                  </a>
                </div>
                <div class="text-[12px]">
                  <h4 class="tracking-widest uppercase">TRAVEL THE WORLD</h4>
                  <a
                    href="mailto:ttw@zimogroup.org?subject=Travel The World Enquiry - ZIMO GROUP"
                    class="tracking-wider link mt-1"
                  >
                    ttw@zimogroup.org
                  </a>
                </div>
              </div>
              <section class="flex flex-col items-start gap-3">
                <div class="flex flex-col gap-4">
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">
                      PROPERTY PROFESSIONALS / AGENTS
                    </h4>
                    <a
                      href="mailto:agent@zimogroup.org?subject=Agent Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      agent@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">ADVERTISING</h4>
                    <a
                      href="mailto:advertising@zimogroup.org?subject=Advertising Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      advertising@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">SPONSORSHIP</h4>
                    <a
                      href="mailto:sponsor@zimogroup.org?subject=Sponsor Ship Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      sponsor@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">PARTNERS</h4>
                    <a
                      href="mailto:partners@zimogroup.org?subject=Partners Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      partners@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">LEGAL</h4>
                    <a
                      href="mailto:legal@zimogroup.org?subject=Legal Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      legal@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">CORPORATE</h4>
                    <a
                      href="mailto:corporate@zimogroup.org?subject=Corporate Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      corporate@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">MARKETING</h4>
                    <a
                      href="mailto:marketing@zimogroup.org?subject=Marketing Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      marketing@zimogroup.org
                    </a>
                  </div>
                </div>
                <div class="flex flex-col gap-4 mt-8">
                  <h4 class="text-[16px] uppercase tracking-widest">Press</h4>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">UNITED KINGDOM</h4>
                    <a
                      href="mailto:press-uk@zimogroup.org?subject=Press United Kingdom Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-uk@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">EUROPE</h4>
                    <a
                      href="mailto:press-eu@zimogroup.org?subject=Press Europe Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-eu@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">NORTH AMERICA</h4>
                    <a
                      href="mailto:press-na@zimogroup.org?subject=Press North America Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-na@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">MIDDLE EAST</h4>
                    <a
                      href="mailto:press-me@zimogroup.org?subject=Press Middle East Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-me@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">ASIA/AUSTRALIA</h4>
                    <a
                      href="mailto:press-apac@zimogroup.org?subject=Press Asia/Australia Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-apac@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">AFRICA</h4>
                    <a
                      href="mailto:press-af@zimogroup.org?subject=Press Africa Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-af@zimogroup.org
                    </a>
                  </div>
                  <div class="text-[12px]">
                    <h4 class="tracking-widest uppercase">CHINA/HONG KONG</h4>
                    <a
                      href="mailto:press-ch@zimogroup.org?subject=Press China/Hong kong Enquiry - ZIMO GROUP"
                      class="tracking-wider link mt-1"
                    >
                      press-ch@zimogroup.org
                    </a>
                  </div>
                </div>
              </section>
              <div class="self-end min-h-[54px] min-w-[54px]">
                <img src="/qr.svg" class="h-[54px] w-[54px]" alt="" />
              </div>
            </section>
          </motion.div>
        </div>
        <div class="hero-img-wrapper">
          <img src="/zimo-black.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";
import React, { useRef } from "react";

const Terms = ({ closeTermsPopup }) => {
  const section12Ref = useRef(null);

  const scrollToSection12 = () => {
    if (section12Ref.current) {
      section12Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="section bg-black">
      <div
        className="z-100 overflow-y-auto inset-0  text-white py-8 px-2 lg:px-4 select-text overflow-hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <img
          onClick={() => {
            closeTermsPopup();
           { scrollToSection12 };
          }}
          className="absolute z-30 right-6 top-8 cursor-pointer"
          src="/close.png"
          alt=""
        />
        <main className="mx-auto px-2" style={{ maxWidth: "2500px" }}>
          <a href="/">
            <img
              src="/logo2-white.png"
              className="block h-[30px] mx-auto mt-16"
            />
          </a>
          <h2 className="text-center text-[20px] mt-16 tracking-widest">
            TERMS OF SERVICE
          </h2>
          <div className="mt-16 gap-8 grid xl:grid-cols-[332px_1fr_2px_1fr] text-[12px]">
            <div className="self-center">
              <img src="/zimo-group.png" className="max-w-[332px]" />
            </div>
            <section className="flex flex-col gap-6">
              <p>
                Welcome to www.zimogroup.org (the "Site"), a website provided by
                ZIMO GROUP LIMITED, the parent company of ZIMO ("Company"). Your
                use of the Site is at all times subject to the following terms
                and conditions, and you are deemed to have accepted these terms
                of service upon using the Site. You should review these terms of
                service carefully, and be sure you understand them, prior to
                using the Site. If you do not agree to these terms of service,
                you must immediately exit the Site.
              </p>
              <div className="flex flex-col gap-2">
                <p>Scope of Use</p>
                <p>
                  The Site is provided for promotional and informational
                  purposes only, and Company does not provide any client
                  services through the Site (www.zimogroup.org). You may only
                  use the Site if you are a current or prospective customer of
                  Company, or otherwise interested in learning more about
                  Company for a legitimate business/user purpose. The Site may
                  not be used for any unlawful, fraudulent, harassing,
                  objectionable or other non-legitimate business purpose.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Site Content</p>
                <p>
                  The Site and all content on the Site (collectively "Content"),
                  plus all copyrights, trademarks, service marks and other
                  intellectual property rights in the Site and such Content, are
                  owned or licensed by Company. You may access, use and copy
                  Content only as expressly permitted herein. No provision of
                  these terms of service, and nothing contained on the Site,
                  grants to you, whether expressly, implicitly or otherwise, any
                  license or other right to copy, disclose, distribute,
                  retransmit, use or create derivative works of any Content
                  without the written permission of Company or its licensee (as
                  the case may be), and any such copying, disclosure,
                  distribution, retransmission, use or creation of derivative
                  works is strictly prohibited, except as expressly set forth
                  herein.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Third-Party Websites</p>
                <p>
                  The Site may contain links to websites maintained by third
                  parties (individually a "Third-Party Site"). Company is not
                  responsible for any content on a Third-Party Site (including,
                  but not limited to, any opinions contained on a Third-Party
                  Site), and does not necessarily endorse or otherwise approve
                  of such content. No link from the Site to a Third-Party Site,
                  or from a Third-Party Site to the Site, is an endorsement,
                  sponsorship or recommendation by Company of such Third-Party
                  Site, and the link is provided only for your convenience. In
                  addition, your use of a Third-Party Site will be subject to
                  its terms of use and other provisions, for which you are
                  responsible if you proceed to such Third-Party Site.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Privacy Policy</p>
                <p>
                  Company may collect certain personal and analytical
                  information from you, among other ways, through the Site, and
                  will handle such information in accordance with its privacy
                  policy, which can also be located on the Site (the"Privacy
                  Policy"). You should contact Company as set forth in the
                  Privacy Policy with all complaints, questions and requests for
                  additional information relating to Company's handling of such
                  information.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Disclaimer of Warranties</p>
                <p>
                  THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND WITHOUT ANY
                  WARRANTY OR REPRESENTATION OF ANY KIND, WHETHER EXPRESS OR
                  IMPLIED (INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
                  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE).
                  WITHOUT LIMITING THE GENERALITY OF THE IMMEDIATELY PRECEDING
                  SENTENCE, COMPANY DOES NOT WARRANT OR REPRESENT THAT THE SITE
                  OR ANY CONTENT (A) WILL ALWAYS BE AVAILABLE FOR USE, (B) ARE
                  FREE FROM SPYWARE, MALWARE, ADWARE, VIRUSES, WORMS OR OTHER
                  MALICIOUS CODE, (C) WILL MEET YOUR REQUIREMENTS, (D) DO NOT
                  INFRINGE THE INTELLECTUAL PROPERTY RIGHTS OF A THIRD PARTY, OR
                  (E) ARE ERROR-FREE OR THAT ANY DEFECTS THEREIN WILL BE
                  CORRECTED.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Limitation on Liability</p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANY SHALL NOT HAVE
                  ANY LIABILITY FOR (A) ANY PERSONAL INJURY, OR (B) ANY DIRECT,
                  INCIDENTAL, SPECIAL, INDIRECT, CONSEQUENTIAL OR OTHER DAMAGES
                  WHATSOEVER (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF
                  PROFITS, LOSS OF DATA, OR COMPUTER CRASHES OR OTHER DENIALS OF
                  SERVICES) ARISING FROM OR RELATED TO YOUR USE OF, OR INABILITY
                  TO USE, THE SITE, OR ANY CONTENT THEREON, HOWEVER CAUSED,
                  REGARDLESS OF THE THEORY OF LIABILITY (INCLUDING, BUT NOT
                  LIMITED TO, BREACH OF CONTRACT, TORT, OR OTHER), AND EVEN IF
                  COMPANY KNEW, OR SHOULD HAVE KNOWN, OF THE POSSIBILITY OF SUCH
                  DAMAGES.
                </p>
              </div>
            </section>
            <section className="self-center mx-auto">
              <div
                className="h-0 w-72 xl:h-[100vh] max-h-[523px] xl:w-0 opacity-50"
                style={{
                  borderLeft: "1px solid rgb(190, 159, 86)",
                  borderTop: "1px solid rgb(190, 159, 86)",
                }}
              ></div>
            </section>
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p>Indemnification</p>
                <p>
                  Indemnification You must indemnify, defend and hold harmless
                  Company, its subsidiaries and other affiliates, and its
                  officers, employees and other agents, from all costs,
                  expenses, damages, liabilities, losses and other monetary
                  payments (including, but not limited to, attorneys' fees and
                  disbursements) in connection with (a) your access to, and use
                  of, the Site, (b) your failure to perform any obligation
                  pursuant to these terms of service, (c) your violation of any
                  rights of a third party (including, but not limited to,
                  infringement of a third party's intellectual property rights,
                  or rights of privacy and publicity, and claims of defamation),
                  and (d) any information or other content submitted by you to
                  Company through the Site.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Information Provided by You</p>
                <p>
                  You grant to Company a non-exclusive, perpetual and fully-paid
                  license to copy, distribute, modify, and create derivative
                  works of all information and other content submitted by you to
                  Company through the Site. All information provided to you
                  through the Site must be accurate and complete in all
                  respects, unless by its nature such information is not
                  intended to be accurate or complete. In addition, you must at
                  all times immediately update any such information to maintain
                  its accuracy and completeness.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Applicable Law</p>
                <p>
                  These terms of service will be governed by, and construed in
                  accordance with, the laws of England, United Kingdom, without
                  regard to principles of conflict of laws.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Disputes</p>
                <p>
                  Except for any dispute covered by the Privacy Policy, you and
                  Company (a) will submit any dispute relating to the Site, any
                  Content or these terms of service exclusively to a federal,
                  state or local court located in England, United Kingdom and
                  having subject matter jurisdiction over such dispute, and (b)
                  consent to any such court being a proper venue, and waive any
                  objection to its not being a proper venue (including, but not
                  limited to, any such objection based on convenience), for such
                  dispute.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Entire Agreement </p>
                <p>
                  These terms of service contain the entire agreement, and
                  supersede all prior oral and written proposals, understandings
                  and agreements, between you and Company with respect to the
                  Site and any Content.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Severability</p>
                <p>
                  Whenever possible, each provision of these terms of service
                  shall be interpreted to be effective and valid under
                  applicable law. If, however, any such provision shall be
                  prohibited by or invalid under such law, it shall be deemed
                  modified to conform to the minimum requirements of such law,
                  or if for any reason it is not so modified, it shall be
                  prohibited or invalid only to the extent of such prohibition
                  or invalidity without the remainder of such provision, or any
                  other provision of these terms of service, being prohibited or
                  invalid.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Revisions</p>
                <p>
                  Company may revise these terms of service from time to time by
                  posting the revised terms of service on the Site, with any
                  revision taking effect as of the date of such posting. It is
                  your responsibility to periodically check these terms of
                  service on the Site for such revisions. Your use of the Site
                  following the posting of any revisions to these terms of
                  service on the Site will be deemed an irrevocable acceptance
                  by you of such revisions.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Additional Information</p>
                <p>
                  If you have any questions or desire additional information
                  regarding the Site, any Content or these terms of service, or
                  if you need to contact Company for any other reason, please
                  write to legal@zimogroup.org.
                </p>
              </div>
            </section>
          </div>
        </main>
        <p className="text-[9px] text-end mt-16">
          Effective Date: 02 January, 2023
        </p>
      </div>
    </div>
  );
};

export default Terms;

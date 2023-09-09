'use client'
import React, { useRef } from "react";
const Policies = ({closePolicyPopup}) => {
  const section12Ref = useRef(null);

  const scrollToSection12 = () => {
    if (section12Ref.current) {
      section12Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="section bg-black">
      <div
        className="z-20 overflow-y-auto inset-0  text-white py-8 px-2 lg:px-4 select-text"
        style={{ opacity: 1, transform: "none" }}
      >
        <img
          className="absolute z-30 right-6 top-8 cursor-pointer"
          src='/close.png'
          alt=""
          onClick={() => {
            closePolicyPopup();
            {scrollToSection12}
          }}
        />
        <main className="mx-auto" style={{ maxWidth: "2500px" }}>
          <a href="/">
            <img
              src="/logo2-white.png"
              className="block h-[30px] mx-auto mt-16"
            />
          </a>
          <div className="flex flex-col md:flex-row gap-4 mt-12 justify-center items-center tracking-widest text-[18px] sm:text-[20px]">
            <h2>
              <span className="opacity-75">RELATED:</span>
              COOKIES POLICY
            </h2>
            <h2 className="mx-auto lg:pr-[320px]">PRIVACY POLICY</h2>
          </div>
          <div className="mt-8 gap-8 grid xl:grid-cols-[332px_1fr_2px_1fr] text-[12px]">
            <div className="self-center">
              <img src="/zimo-group.png" className="max-w-[332px]" />
            </div>
            <section className="flex flex-col gap-6">
              <p>
                ZIMO, a division of ZIMO GROUP LIMITED ("ZGL") respects your
                concerns about privacy. This privacy policy ("Privacy Policy")
                describes the types of personal information we collect about
                individuals on www.mediaartslab.com (the "Site"), how we may use
                the information, with whom we may share it, your rights and the
                choices available regarding our use of the information. The
                Privacy Policy also describes the measures we take to safeguard
                the personal information, how long we retain it and how
                individuals can contact us about our privacy practices and to
                exercise their rights.
              </p>
              <div className="flex flex-col gap-2">
                <p>Information We Obtain</p>
                <p>
                  In connection with your use of the Site, you provide personal
                  information to us in various ways. The types of personal
                  information we obtain include personal information contained
                  in content you submit, such as when you email us by clicking
                  on MAL email address hyperlinks on the Site. You are not
                  required to provide this information but, if you choose not to
                  do so, we may not be able to offer you certain of our services
                  and features of the Site. purpose.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>How We Use the Information We Obtain</p>
                <p>
                  We use the information we obtain on the Site on the basis of
                  our legitimate interests, which we would be glad to describe
                  further upon request, including to: provide our services to
                  you; market our services to you; respond to your requests and
                  inquiries; send you newsletters and other communications if
                  you sign up to receive them; operate, evaluate and improve our
                  business (including developing new services; enhancing and
                  improving our services; managing our communications; and
                  performing accounting, auditing and other internal functions);
                  protect against, identify and prevent fraud and other criminal
                  activity, claims and other liabilities; and comply with and
                  enforce applicable legal requirements, relevant industry
                  standards and our policies, including this Privacy Policy,
                  ZGL's Privacy Shield Policy, and ZGL's Terms of Service. We
                  may also use the personal information we obtain on the Site to
                  analyse our services, personalise your experience on the Site
                  and perform data analytics and market research. As required by
                  applicable law, we will obtain your consent to process
                  personal information for these purposes. We also may use the
                  information we obtain in other ways for which we provide
                  specific notice at the time of collection.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Automated Collection of Data</p>
                <p>
                  When you use the Site, we may obtain certain information by
                  automated means, such as browser cookies and pixel tags. If we
                  obtain such information in this manner, it could include your
                  device IP address, domain name, identifiers associated with
                  your devices, device and operating system type and
                  characteristics, web browser characteristics, language
                  preferences, clickstream data, your interactions with the Site
                  (such as the web pages you visit, links you click and features
                  you use), the pages that led or referred you to the Site,
                  dates and times of access to the Site, and other information
                  about your use of the Site. A "cookie" is a text file that
                  websites send to a visitor's computer or other
                  Internet-connected device to uniquely identify the
                  visitor'sbrowser or to store information or settings in the
                  browser. This technology helps us (1) remember your
                  information so you will not have to re-enter it; (2) track and
                  understand how you use and interact with the Site; (3) tailor
                  the Site around your preferences; (4) measure the usability of
                  the Site; (5) understand the effectiveness of our
                  communications; and (6) otherwise manage and enhance the Site.
                  If we collect cookies, then to the extent required by
                  applicable law, we will obtain your consent before placing
                  non-essential cookies or similar technologies on your
                  computer. You can stop certain types of cookies from being
                  downloaded on your computer by selecting the appropriate
                  settings on your web browser. Most web browsers will tell you
                  how to stop accepting new browser cookies, how to be notified
                  when you receive a new browser cookie and how to disable
                  existing cookies. You can find out how to do this for your
                  particular browser by clicking "help"on your browser's menu or
                  by visiting www.allaboutcookies.org. The Site is not designed
                  to respond to "do not track" signals received from browsers.
                  Please note that, if we collect cookies or use other automated
                  tool, then without such cookies or other automated tools, you
                  may not be able to use all of the features of the Site. We do
                  not obtain personal information about your online activities
                  over time or across third-party websites, devices or other
                  online services. On the Site, we may use third-party online
                  analytics services, such as those of Google Analytics. If we
                  use such third-party online analytics service, then to the
                  extent required by applicable law, we will obtain your consent
                  before using such third-party analytics cookies. If we use
                  analytics services, then the service providers that administer
                  these analytics services use automated technologies to collect
                  data (such as email address, IP addresses, cookies and other
                  device identifiers) to evaluate, for example, use of the Site
                  and to diagnose technical issues. To learn more about Google
                  Analytics and how to manage your preferences, please visit
                  www.google.com/analytics/learn/privacy.html.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Information Sharing</p>
                <p>
                  We do not disclose personal information we obtain about you,
                  except as described in this Privacy Policy. We share your
                  personal information with our (1) subsidiaries and affiliates
                  and (2) service providers who perform services on our behalf,
                  including data analytics providers, for the purposes described
                  in this Privacy Policy. We do not authorise our service
                  providers to use or disclose the information except as
                  necessary to perform services on our behalf or comply with
                  legal requirements. We also may disclose information about you
                  (1) if we are required to do so by law or legal process (such
                  as a court order or subpoena); (2) in response to requests by
                  government agencies, such as law enforcement authorities; (3)
                  to establish, exercise or defend our legal rights; (4) when we
                  believe disclosure is necessary or appropriate to prevent
                  physical or other harm or financial loss; (5) in connection
                  with an investigation of suspected or actual illegal activity;
                  (6) in the event we sell or transfer all or a portion of our
                  business or assets (including in the event of a
                  reorganization, dissolution or liquidation); or (7) otherwise
                  with your consent.
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
                <p>Data Transfers</p>
                <p>
                  We transfer the personal information we collect about you to
                  recipients (including our subsidiaries and affiliates, and
                  third-party service providers) in countries other than the
                  country in which the information originally was collected,
                  including the UK. Those countries may not have the same data
                  protection laws as the country in which you initially provided
                  the information. When we transfer your information to
                  recipients in these countries, we will protect that
                  information as described in this Privacy Policy and will
                  comply with applicable legal requirements to provide adequate
                  protection for the transfer of personal information to
                  recipients in countries other than the one in which you
                  provided the information. If you are located in the European
                  Economic Area ("EEA") or Switzerland, we will comply with
                  applicable legal requirements providing adequate protection
                  for the transfer of personal information to recipients in
                  countries outside of the EEA and Switzerland. Your information
                  will also be transferred to our third party service providers
                  in the U.S. We have implemented appropriate safeguards
                  designed to ensure an adequate level of data protection,
                  including by concluding data transfer agreements incorporating
                  the European Commission's Standard Contractual Clauses under
                  Article 46 of the EU General Data Protection Regulation
                  (GDPR), or by selecting UK and U.S. service providers that are
                  certified to the Privacy Shield frameworks.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Your Rights and Choices</p>
                <p>
                  We offer you certain choices in connection with the personal
                  information we obtain about you. To update your preferences,
                  update or correct your information, limit the communications
                  you receive from us, or submit a request, please contact us as
                  specified in the How to Contact Us section of this Privacy
                  Policy. You also can unsubscribe from our marketing mailing
                  lists by following the"Unsubscribe" link in our emails. To the
                  extent provided by applicable law, you have the right to (1)
                  request access to the personal information we maintain about
                  you; (2) request that we update, correct, amend, erase or
                  restrict the information; or (3) exercise your right to data
                  portability, by contacting us as indicated below. Depending on
                  your location, you may have the right to file a complaint with
                  a government regulator if you are not satisfied with our
                  response. If you are located in the EEA and are not satisfied
                  with our responses, you may lodge a complaint with the data
                  protection authority in your country of residence, place of
                  work or place of the alleged infringement of the GDPR. Where
                  provided by law, you may withdraw any consent you previously
                  provided to us or object at any time to the processing of your
                  personal information on legitimate grounds relating to your
                  particular situation, and we will apply your preferences going
                  forward. To help protect your privacy and maintain security,
                  we may take steps to verify your identity before granting you
                  access to your information. To the extent permitted by
                  applicable law, a charge may apply before we provide you with
                  a copy of any of your personal information that we maintain.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Other Online Services and Third-Party Features</p>
                <p>
                  The Site may provide links to other online services and
                  websites for your convenience and information (e.g., Facebook,
                  Vimeo Instagram, LinkedIn and Twitter buttons). These
                  services, websites, and third-party features may operate
                  independently from us. The privacy practices of these third
                  parties, including details on the information they may collect
                  about you, are subject to the privacy statements of these
                  parties, which we strongly suggest you review. To the extent
                  any linked online services or third-party features are not
                  owned or controlled by us, ZGL is not responsible for these
                  third parties' information practices.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Retention of Personal Information</p>
                <p>
                  To the extent permitted by applicable law, we retain personal
                  information we obtain about you for the duration of our
                  relationship with you, plus a reasonable period to be able to
                  run regular deletion routines, to take into account the
                  applicable statute of limitations period or to comply with
                  mandatory applicable law.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>How We Protect Personal Information</p>
                <p>
                  We maintain administrative, technical and physical safeguards
                  designed to protect personal information we obtain through the
                  Site against accidental, unlawful or unauthorized destruction,
                  loss, alteration, access, disclosure or use.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Updates to Our Privacy Policy</p>
                <p>
                  This Privacy Policy may be updated periodically to reflect
                  changes in our personal information practices. We will
                  indicate at the top of the notice when it was most recently
                  updated.
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

export default Policies;

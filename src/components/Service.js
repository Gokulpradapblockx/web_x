import React from "react";
import NewContact from "../Home/NewContact";
import Footer from "../Home/Footer";
import { FaArrowRight } from "react-icons/fa";
import img6 from "../Assets/img6.jpg";
import img5 from "../Assets/img5.jpg";
import img4 from "../Assets/img4.jpg";
import img3 from "../Assets/img3.jpg";
import img2 from "../Assets/img2.jpg";
import img1 from "../Assets/img1.jpg";
const Services = () => {
  return (
    <>
      <div className="over_folw container" id="service">
        <div className="row over-service">
          <div className="col-lg-6 col-sm-12 Services_d">
            <h1>Blockchain Development</h1>
            <div className="side_phara">
              <p>Get a free Consultation</p>
              <a target="_blank" className="button-i" href="https://www.linkedin.com/in/manjari-a-9b1aa345/">
                <i>
                  <FaArrowRight />
                </i>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="side_develope">
              <img className="develope_img" src={img1} alt="" />
              <h6>Blockchain Development</h6>
              <p>
                A blockchain is a decentralized digital ledger that saves
                transactions on thousands of computers around the
                globe.Blockchain technology increases the security and speeds up
                the exchange of information in a way that is cost-effective and
                more transparent. Blockchain has resulted in the development of
                thousands of new applications running on DeFi,DAO,Exchanges,NFTs
                etc.We are here to develop a complete Blockchain solutions for
                your requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="row over-service">
          <div className="col-lg-6 Services_d">
            <h1>Front End-Web 3.O Develop</h1>
          </div>
          <div className="col-lg-6">
            <div className="side_develope">
              <img className="develope_img" src={img2} alt="" />
              <h6>Front End - Web 3.O Development</h6>
              <p>
                Front end development is the main part of any application in
                simple terms it is mentioned as Web portal that brings the whole
                community to understand about the project with complete
                creativity. HTML,CSS,JAVASCRIPT, REACT, JQUERY etc are the
                platforms through which Front end can be developed. For
                Blockchain application we purely focus on React with @Web 3.O
                Integration.
              </p>
            </div>
          </div>
        </div>
        <div className="row over-service">
          <div className="col-lg-6 Services_d">
            <h1>Back End Development</h1>
          </div>
          <div className="col-lg-6">
            <div className="side_develope">
              <img className="develope_img" src={img3} alt="" />
              <h6>Back End Development</h6>
              <p>
                Back end development refers to the server side of an application
                and everything that communicates between the database and the
                browser.Back end Development refers to the server side of
                development where you are primarily focused on how the site
                works. Making updates and changes in addition to monitoring the
                functionality of the site will be your primary responsibility.
                This type of web development usually consists of three parts: a
                server, an application, and a database. Code written by back end
                developers is what communicates the database information to the
                browser.
              </p>
            </div>
          </div>
        </div>
        <div className="row over-service">
          <div className="col-lg-6 Services_d">
            <h1>Graphics Designing</h1>
          </div>
          <div className="col-lg-6">
            <div className="side_develope">
              <img className="develope_img" src={img4} alt="" />
              <h6>Graphics Designing</h6>
              <p>
                Graphic designers focus on creating graphics, combining
                typography with photos and illustration to present an idea.
                Traditionally, graphic designers used to work more on logos and
                print design like posters, brochures, magazine and book layouts,
                and packaging. But over time design has evolved along with
                technology and now graphic designers work on creating more
                digital assets for web and email.They use software like Adobe
                Photoshop, Illustrator, and InDesign on a daily basis to create
                their work.
              </p>
            </div>
          </div>
        </div>
        <div className="row over-service">
          <div className="col-lg-6 Services_d">
            <h1>Mobile App Development</h1>
          </div>
          <div className="col-lg-6">
            <div className="side_develope">
              <img className="develope_img" src={img5} alt="" />
              <h6>Mobile Application Development</h6>
              <p>
                Mobile application development is the set of processes and
                procedures involved in writing software for small, wireless
                computing devices, such as smartphones and other hand-held
                devices Native applications. These applications are built using
                integrated development environments (IDEs) and languages for
                mobile OSes such as Apple iOS or Google Android. Hybrid apps.
                These are web apps that act like native apps. They are developed
                using technologies such as HTML, JavaScript and Cascading Style
                Sheets (CSS). Hybrid apps are more cost-effective to develop
                than native apps and can be created faster, but they aren't as
                feature-rich as native applications.
              </p>
            </div>
          </div>
        </div>
        <div className="row over-service">
          <div className="col-lg-6 Services_d">
            <h1>Blockchain Auditing & Testing</h1>
          </div>
          <div className="col-lg-6">
            <div className="side_develope">
              <img className="develope_img" src={img6} alt="" />
              <h6>Blockchain Auditing & Testing</h6>
              <p>
                Blockchain testing is the systematic evaluation of the
                blockchain’s various functional components (e.g., smart
                contracts). Unlike traditional software testing, blockchain
                testing involves several components such as blocks, mining,
                transactions, wallets, and so on, all of which require special
                tools to test.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewContact />
      <Footer />
    </>
  );
};

export default Services;

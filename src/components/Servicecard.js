import React from "react";
import Market from "../Assets/Service-images/NFT.png";
import DeFi from "../Assets/Service-images/DeFi.png";
import crypto from "../Assets/Service-images/crypto wallet.png";
import development from "../Assets/Service-images/smart-contract-development.jpg";
import contract from "../Assets/Service-images/smart contract audit.jpeg";
import mobile from "../Assets/Service-images/mobile-app-development.png";
import service from "../Assets/Service-images/blockchain-development-service.jpg";
import back from "../Assets/Service-images/What-is-back-end-development-2.jpg";
import Graphics from "../Assets/Service-images/Graphics Designing.jpg";
import metaverse from "../Assets/Service-images/metaverse technology.jpg";
import frontend from "../Assets/Service-images/frontend.jpg";
import coin from "../Assets/Service-images/crypto-coin-devlopment.png";

// import { Link, Outlet} from "react-router-dom";
import Button from "./Button";
import "./css/servicecard.css";
const Servicecard = () => {
  return (
    <div className="About-service">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="why">
            <h1>
              <span>Our</span> <br />
              Services
            </h1>
          </div>
        </div>
        <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <h1>Services</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={Market} alt="" />
              <h6>NFT and NFT Marketplace Development</h6>
              <p>
              Plug into our NFT and NFT marketplace development services to swap your NFT
securely and we provide you with robust end-to-end NFT marketplace
development. NFT are unique and represent the digital assets in real-world
objects like art, music, and game items.
              </p>
              <a href="./Nft"> <Button /></a>
             
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={DeFi} alt="" />
              <h6>DeFi development</h6>
              <p>
              DeFi is the new vision of banking and financial services that is based on pre-topre payments through blockchain technology. Our expertise helps you in
developing a transparent and decentralized platform and developing financial
products on Decentralized Finance.
              </p>
              <a href="./DeFi"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={crypto} alt="" />
              <h6>Cryptocurrency Wallet Development</h6>
              <p>
              The cryptocurrency market has grown remarkably in a few years and a crypto
wallet is an application that allows the user to store and retrieve their digital
asset. We provide different wallet security features like multi-sig, biometric
authentication, and more in crypto wallet development.
              </p>
              <a href="./Crypto"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={development} alt="" />
              <h6>Smart Contract Development</h6>
              <p>
              We develop secure smart contract codes with business requirements. From 
finance to insurance, our developers create smart contracts according to the 
customer’s requirements that are perfect for diverse industries and business 
models. The self-executing smart contracts are now essential to any blockchain 
business. 

              </p>
              <a href="./Smart"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={contract} alt="" />
              <h6>Smart Contract Audit Development</h6>
              <p>
              We provide affordable and intense transactions and agreements of Ethereum
smart contracts or Solana programs or any kind of Dapps.<br /><br /> We ensure the smart
contract goes through all the stages and comprehensive services like smart
contract design, development, auditing, and optimization.


              </p>
              <a href="./Audit"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={mobile} alt="" />
              <h6>Mobile App Development</h6>
              <p>
              Blockchain technology has been popular initially as a base for the stable
functioning of every cryptocurrency, it is now been looked upon as a database
that can be used almost on any mobile app. By which we provide transparency,
fraudulent transaction or tampering cannot be made without the knowledge of
the shareholders.
              </p>
              <a href="./Mobile"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={service} alt="" />
              <h6>Blockchain Development Services</h6>
              <p>
              We provide Blockchain development services to create your decentralized 
blockchain networks by achieving transparency, traceability, and security of 
data and transactions. By offering end-to-end services for your blockchain 
application development and we provide reliable solutions for your projects.
              </p>
              <a href="./Blockchain"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={back} alt="" />
              <h6>Backend Development</h6>
              <p>
              From the technical point of view, there is a bridge between the tokens and
another smart contract that helps to connect with the web/mobile applications.
our company provides design and develop APIs, performance tests, software
specification design, and provide technical support
              </p>
              <a href="./Backend"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={Graphics} alt="" />
              <h6>Graphics Designing</h6>
              <p>
              Graphic design is a craft where professionals create visual content to
communicate messages in different design forms like typography, imagery, and
colors. we ensure that graphic design can discreetly carry our ideals to the
users by establishing a trustworthy design.

              </p>
              <a href="./Grapic"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={metaverse} alt="" />
              <h6>Metaverse Development</h6>
              <p>
              Make your business future adventures by using the metaverse specification in
your business needs. Where metaverse is the digital real world in which people
will gather to work, play and hang out through a metaverse.
              </p>
              <a href="./Meta"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={frontend} alt="" />
              <h6>Frontend Development</h6>
              <p>
              Frontend development is the client-side development where we proved the
services of developing the HTML, CSS, and JavaScript for websites or web
applications so that the users can see and interact with them directly.
              </p>
              <a href="./Frontend"> <Button /></a>
            </div>
          </div>
          <div className="col-lg-4 b-space">
            <div className="sides_develope">
              <img className="develope_img" src={coin} alt="" />
              <h6>Crypto Coin and Token Development</h6>
              <p>
              We make secure and scalable coin/token development services with secured
functionalities. And we help you build customized solutions to develop
advanced crypto coins to add value to your business.
              </p>
              <a href="./Coin"> <Button /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;

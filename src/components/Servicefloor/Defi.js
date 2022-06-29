import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Defi = () => {
  return (
    <div className="nft-market">
      <div className="row text-center">
        <div className="col-lg-12 nft-heading">
          <h2>DeFi development</h2>
        </div>
        <div className="col-lg-12 nft-subspace"></div>
      </div>
      <div className="container">
        <div className="row nft-subheading">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <h4>Decentralized Finance development (DeFi)</h4>
            <p>
              Decentralized finance (DeFi) is an emerging financial technology
              based on a secure distributed ledger similar to the other
              cryptocurrencies used. This DeFi helps in removing the system like
              control banks and institutions have no money, financial products,
              and financial products. Decentralized finance is referred to as
              DeFi and DeFi helps in eliminating the fees that the third party
              like banks, settlement, and financial companies charge for using
              their services.
            </p>
            <h5>The Finance World Before DeFi</h5>
            <p>
              In centralized finance, your money is held by banks, corporations
              whose overarching goal is to make money. The financial system is
              full of third parties who facilitate money movement between
              parties, with each one charging fees for using their services.
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
      <div className="container-fluid bottom-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-11">
              <h5>Unique attributes of DeFi</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h6>The World with Decentralized Finance</h6>
              <p>
                Decentralized finance eliminates intermediaries by allowing
                people, merchants, and businesses to conduct financial
                transactions through emerging technology. This is accomplished
                through peer-to-peer financial networks that use security
                protocols, connectivity, software, and hardware advancements.
              </p>
            </div>

            <div className="col-lg-5">
              <h6>Feature of DeFi</h6>
              <p>
                {" "}
                <FaAngleRight /> Ultra-Transparent
              </p>
              <p>
                {" "}
                <FaAngleRight /> Complete control
              </p>
              <p>
                {" "}
                <FaAngleRight /> Accessibility
              </p>
              <p>
                {" "}
                <FaAngleRight /> Non-custodial
              </p>
            </div>
            <div className="col-lg-1"></div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Defi;

import React from "react";

const Backend = () => {
  return (
    <div className="nft-market">
      <div className="row text-center">
        <div className="col-lg-12 nft-heading">
          <h2>Backend Development</h2>
        </div>
        <div className="col-lg-12 nft-subspace"></div>
      </div>
      <div className="container">
        <div className="row nft-subheading">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <h4>Backend Development</h4>
            <p>
              From the technical point of view, there is a bridge between the
              tokens and another smart contract that helps to connect with the
              web/mobile applications. our company provides design and develop
              APIs, performance tests, software specification design, and
              provide technical support.
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
              <h5>Unique attributes of Backend development</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h6>Backend development</h6>
              <p>
                The database or backend is the part that remains on the Ethereum
                network and which connects to the frontend to provide the
                necessary function. The backend is built using smart contracts,
                which is the just code that executes on the blockchain network.
                We use the backend for integration with other existing
                technologies and services. Real, world applications cannot live
                in an isolated environment. We use the backend to process and
                store anything large enough for the decentralized network in the
                particular blockchain. And the business logic and the whole
                application are stored somewhere in the world excluding only the
                blockchain part. We have the IPFS which is a decentralized,
                per-to-per file sharing protocol. IPFS network runs on the web
                and uses content-address storage (CAS) to store the data and
                retrieve based on its content.
              </p>
            </div>

            <div className="col-lg-5">
              <h6>Backend for a decentralized network</h6>
              <p>
                In a fully decentralized application, where the client interacts
                with the smart contract directly, where the bridge is narrowed
                down to JSON RPC API capabilities of public APIs or node pools
                like infura. The interaction with the decentralized network can
                be done in two ways depending on the applications. Listening to
                the network events (like token transfers) / reading the network
                state. Publishing transactions (invoking state-changing smart
                contract functions like a token transfer). To build a secure and
                reliable back-end solution we use a robust back end-end solution
                for Ethereum which we name Ethereum Gateway. Which abstracts
                other microservices from Ethereum’s fun and provides a reliable
                API to work with it.
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

export default Backend;

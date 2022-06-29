import React from "react";
import { FaAngleRight } from "react-icons/fa";
const Crypto = () => {
  return (
    <div className="nft-market">
      <div className="row text-center">
        <div className="col-lg-12 nft-heading">
          <h2>Cryptocurrency Wallet Development</h2>
        </div>
        <div className="col-lg-12 nft-subspace"></div>
      </div>
      <div className="container">
        <div className="row nft-subheading">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <h4>Crypto wallet</h4>
            <p>
              The cryptocurrency market has grown remarkably in a few years and
              a crypto wallet is an application that allows the user to store
              and retrieve their digital asset. We provide different wallet
              security features like multi-sig, biometric authentication, and
              more in crypto wallet development.
            </p>
            <h5>Crypto wallet development</h5>
            <p>
              Cryptocurrency wallets are apps just like you use on your
              smartphone and computer. A Crypto wallet stores your private keys
              and to access those private keys or the cryptocurrency you needed
              to give the password. You can access your wallet safely and
              securely to transfer currency like Ethereum and Bitcoin. Crypto
              wallet comes in different forms like a paper wallet, online
              wallet, and hard wallet. Unlike your normal wallet, which can hold
              cash, crypto wallets don’t store the crypto. It will live on
              blockchain but it can be accessed using only private. A common
              example of can cryptocurrency wallet is MetaMask.
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
              <h5>Crypto wallet development</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h6>DeFi Wallet Development</h6>
              <p>
                DeFi wallet provides complete ownership of its funds and private
                key to the users and it ensures the legal transaction and there
                is no third-party involvement in DeFi wallet development
              </p>
              <h6>Mobile Wallet Development</h6>
              <p>
                Get a mnemonics-based wallet for iOS and Android platforms. We
                offer a mobile wallet based on the best features in the market
                for enhanced security and user experience
              </p>
              <h6>Multi-Currency Wallet Development</h6>
              <p>
                Allows the user to store different types of crypto assets in one
                place by providing a wallet. The multi-currency wallet supports
                multiple cryptocurrencies and different tokens.
              </p>
            </div>

            <div className="col-lg-5">
              <h6>NFT Wallet Development</h6>
              <p>
                NFT wallet is a type of wallet that will store exclusively the
                non-fungible tokens that allow secure storage and transfer of
                different nonfungible tokens.
              </p>
              <h6>Web App Wallet Development</h6>
              <p>
                Web application wallet allows users effortless access to crypto
                from anywhere like a browser or phone and they are stored in the
                cloud. Where they are convent to use because private keys are
                stored online.
              </p>
              <h6>Benefits of Cryptocurrency Wallet Development</h6>
              <p>
                {" "}
                <FaAngleRight /> Decentralized currencies are protected from
                inflation and economic crisis effects.
              </p>
              <p>
                {" "}
                <FaAngleRight /> The transactions are secured by unique keys
                which are only accessible by you.
              </p>
              <p>
                {" "}
                <FaAngleRight /> No traditional fees.
              </p>
              <p>
                {" "}
                <FaAngleRight /> Faster and cheaper transactions.
              </p>
              <p>
                {" "}
                <FaAngleRight /> Your operations are no more controlled by
                Governments.
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

export default Crypto;

import { useRef, useEffect } from "react";
import logo from "../Assets/coinbanc logo black (1).png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/portfolio.css"

gsap.registerPlugin(ScrollTrigger);


function Portfolio() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { transform: "translateX(0px)", opacity: "0.2" },
      {
        transform: "translateX(-120px)",
        opacity: "1",
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  const imgRef1 = useRef(null);
  useEffect(() => {
    const el = imgRef1.current;
    gsap.fromTo(
      el,
      { transform: "translateX(0px)", opacity: "0.2" },
      {
        transform: "translateX(-120px)",
        opacity: "1",
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  const imgRef2 = useRef(null);
  useEffect(() => {
    const el = imgRef2.current;
    gsap.fromTo(
      el,
      { transform: "translateX(0px)", opacity: "0.2" },
      {
        transform: "translateX(-120px)",
        opacity: "1",
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  const imgRef3 = useRef(null);
  useEffect(() => {
    const el = imgRef3.current;
    gsap.fromTo(
      el,
      { transform: "translateX(0px)", opacity: "0.2" },
      {
        transform: "translateX(-120px)",
        opacity: "1",
        duration: 3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <>
     
      <div className="container-fluid model2">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7 mikki">
            <h1>COINBANC</h1>
            <p>
            Coinbanc allows the users and merchant to trade their crypto assets on the Centralized and 
Decentralized models by lending and borrowing. This platform allows the users and 
merchants to keep the crypto assets as collateral without any physical form of collateral this 
makes the Coinbanc platform unique. It is P2P lending and borrowing platform without any 
complex KYC process which is similar to the traditional loaning process and provides better 
fiat transactions without any tax deduction. it is an ongoing DeFi project on BNB. 
            </p>
            <a target="_blank" href="https://www.coinbanc.app">TRY NOW</a>
          </div>

          <div className="col-lg-4 move-image">
            <img src={logo} alt="spiderman" ref={imgRef} />
          </div>
          
        </div>
      </div>
      <div className="container-fluid oreo">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h1>Golden Kitty</h1>
            <p>
            Golden kitty is the cake bank, brimming with luck and spreading fortune with his cake. 
Golden kitty cake was inspired by Waving Lucky Cat from the Chinese/Japanese community. 
It has offered proper security insurance. Which makes it more secure to guard against the 
whales, scammers, and rugs. The insurance will be funded through every transection and 
stored safely in the cake bank. Cake bank ensures that you get to claim free cake daily and 
there will be a Golden Kitty Cake airdrops other than the cake rewords and the cake reward 
also as its own feature to prevent any whale manipulation.  
            </p>
            <a target="_blank" href="https://goldenkittycake.com/">TRY NOW</a>
          </div>
          
          <div className="col-lg-4 move-image1">
            <img
              src="https://goldenkittycake.com/images/IMG_4659-p-500.png"
              alt="spiderman"
              ref={imgRef1}
            />
          </div>
        </div>
      </div>   
      <div className="container-fluid loto">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h1>My Lotto Coin</h1>
            <p>
            It is a fully permissionless DeFi-powered play-to-earn lottery DApp. My Lotto Coin is 
transparent, reliable, and secure. It can be accessed from anywhere without any restrictions 
unlike traditional and online lotteries, MyLottoCoin winners remain anonymous and no 
player identity can be exposed at any stage. MyLottoCoin is easy to play by just picking your 
number and paying from the BNB wallet of your choice. And it does not require to deposit of 
any funds prior to a game. In this game, payments are immediate and fully controlled by a 
smart contract without any third-party involvement
            </p>
            <a target="_blank" href="https://www.mylottocoin.com/">TRY NOW</a>
          </div>

          <div className="col-lg-4 move-image1">
            <img
              src="https://www.mylottocoin.com/assets/images/logo.png"
              alt="spiderman"
              ref={imgRef2}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid Club">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-7">
            <h1>Elephants Club</h1>
            <p>
            The Elephants club is a non-fungible token that consists of unique elephants with rare 
collectibles. The aim of Chill Elephant Club is to build a community that shares the same 
passion to help underfunded and understaffed national parks protect the wildlife that exists 
freely. And the plan is to create 3,0000 unique elephants in our elephant club, with the goal 
of raising the funds for the new species. In the secondary sale of the airdrop, the Chill 
Elephant club will donate the royalties to the charity supporting new species and there will 
be play-to-earn game features and NFT staking.   
            </p>
            <a target="_blank" href="https://www.thechillelephantsnft.site">TRY NOW</a>
          </div>

          <div className="col-lg-4 move-image1">
            <img
              src="https://www.thechillelephantsnft.site/static/media/logo.6ab671a2.svg"
              alt="spiderman"
              ref={imgRef3}
            />
          </div>
        </div>
      </div>   
    
    </>
  );
}

export default Portfolio;

import { useState } from "react";
import { FaExchangeAlt, FaLock } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import BTC from "../public/bitcoin-btc-logo.png";
import XMR from "../public/monero-xmr-logo.png";

const HeroSection = () => {
  const [sendAmount, setSendAmount] = useState("10");
  const [receiveAmount, setReceiveAmount] = useState("4137.68444734");
  const [sendToken, setSendToken] = useState("BTC");
  const [receiveToken, setReceiveToken] = useState("XMR");

  const swapTokens = () => {
    setSendToken(receiveToken);
    setReceiveToken(sendToken);
    setSendAmount(receiveAmount);
    setReceiveAmount(sendAmount);
  };

  return (
    <section className="bg-[#101012] text-white min-h-screen  flex flex-col items-center justify-between px-6 py-12 md:py-20 relative overflow-hidden">
      {/* Background Large Text */}

      {/* <h1 className="absolute text-[15rem] md:text-[20rem] font-bold text-white bottom-8 left-1/2 transform -translate-x-1/2 select-none">
        Unlimited
          <h1 className="absolute text-[14rem] md:text-[19.9rem] font-bold text-gray-800 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">Unlimited</h1>
      </h1> */}
      <h1 className="absolute text-[15rem] md:text-[20rem] font-bold text-gray-800 bottom-8 left-1/2 transform -translate-x-1/2 select-none">
        Unlimited
      </h1>

      <div className="flex justify-center gap-64 text-center w-full relative z-10 px-20 py-5">
        <div className="flex flex-col w-1/3">
            <h1 className="text-4xl md:text-8xl font-bold text-left">Swap any volume.<br /> Be private.</h1>
            <p className="mt-4 text-gray-400 text-lg md:text-base text-left">Unleash Crypto Freedom: Limitless, Trustworthy, and Sign-Up Free</p>
        </div>
        {/* Swap Box */}
        <div className="w-1/2">
          <div className="mt-8 p-6  bg-[#141414] rounded-2xl shadow-lg w-full max-w-md mx-auto border border-[#141414]">
            <h2 className="text-lg font-semibold text-center">Start Exchange</h2>

            <div className="mt-4 bg-gray-800 p-3 rounded-lg flex justify-between items-center border border-gray-700 relative">
              <div>
                <p className="text-sm text-gray-400">You Send</p>
                <div className="flex items-center space-x-2">
                  <img src={BTC} alt="BTC" className="w-6 h-6" />
                  <p className="text-xl font-semibold">{sendToken}</p>
                  <BiChevronDown className="text-gray-400" />
                </div>
              </div>
              <input
                type="text"
                value={sendAmount}
                className="bg-transparent text-right text-xl w-20 focus:outline-none"
                readOnly
              />
            </div>

            <button onClick={swapTokens} className="my-2 flex justify-center w-full text-gray-400 hover:text-white">
              <div className="bg-gray-700 p-2 rounded-full">
                <FaExchangeAlt size={20} />
              </div>
            </button>

            <div className="bg-gray-800 p-3 rounded-lg flex justify-between items-center border border-gray-700 relative">
              <div>
                <p className="text-sm text-gray-400">You Get</p>
                <div className="flex items-center space-x-2">
                  <img src={XMR} alt="XMR" className="w-6 h-6" />
                  <p className="text-xl font-semibold">{receiveToken}</p>
                  <BiChevronDown className="text-gray-400" />
                </div>
              </div>
              <input
                type="text"
                value={receiveAmount}
                className="bg-transparent text-right text-xl w-20 focus:outline-none"
                readOnly
              />
            </div>

            <div className="flex items-center justify-between mt-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <FaLock />
                <span>The rate is floating</span>
              </div>
            </div>

            <button className="mt-4 w-full bg-blue-500 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">Exchange →</button>
          </div>
        </div>
        
      </div>

      {/* Statistics Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm md:text-base">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">893</h3>
          <p>Currencies supported</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">Rate</h3>
          <p>Fixed/Float</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">8+</h3>
          <p>Years of work</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">980+ Reviews</h3>
          <p>Excellent ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

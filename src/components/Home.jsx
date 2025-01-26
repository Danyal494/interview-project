import React from "react";

const Home = () => {
  return (
    <div className="h-screen max-sm:mt-40 flex justify-around max-sm:justify-center items-center">
      <div className="introdiv mt-32 ">
        <h1 className="text-white font-medium  text-[53px]">
          Safely{" "}
          <span className="text-[#72FDFC]">
             Buy, Sell, and <br /> Manage{" "}
          </span>
          a Diverse Array <br />
          of Digital Assets
        </h1>
        <p className="text-white my-9 text-2xl">
          Own & Earn your crypto with{" "}
          <span className="text-[#72FDFC]">PressX</span>
        </p>
        <div className="btndiv flex gap-6 items-center">
          <button className="bg-[#72FDFC] px-6 font-semibold py-2 rounded-lg">
            {" "}
            P2P Trade
          </button>
          <button className="bg-white flex items-center gap-2 px-6 font-semibold py-2 rounded-lg">
            Deposit Crypto <img src="Vector (3).svg" alt="" />
          </button>
        </div>

        <div className="img-div flex flex-wrap  items-center my-24 ml-7">
          <img src="image 10.png" alt="" />
          <img src="image 11.png" alt="" />
          <img src="image 13.png" alt="" />
        </div>
      </div>
      <div className="mobilearea flex items-center h-[90%] my-10 ">
        <img className="lg:h-[650px] md:h-[452px] max-sm:hidden " src="image 9.png" alt="" />
      </div>
    </div>
  );
};

export default Home;

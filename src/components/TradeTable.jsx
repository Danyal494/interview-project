import React from "react";

const TradeTable = () => {
  const TTable = [
    {
      icon: "Component 13.png",
      text: "Bitcoin",
      css: "",
      arrow: "Vector (1).svg",
      money: "$ 11.795,85",
    },
    {
      icon: "Component 14.png",
      text: "Ethereum",
      arrow: "Vector (2).svg",
      money: "$ 5.248,75",
    },
    {
      icon: "Component 15 (2).png",
      text: "Nitecoin",
      arrow: "Vector (1).svg",
      money: "$ 8.457,40",
    },
    {
      icon: "litecoin 1.svg",
      text: "Litecoin",
      arrow: "Vector (1).svg",
      money: "$ 5.245,54",
    },
    {
      icon: "dogecoin 3.svg",
      text: "Dogecoin",
      arrow: "Vector (2).svg",
      money: "$ 6.795,85",
    },
    {
      icon: "dogecoin 3.svg",
      text: "Dogecoin",
      arrow: "Vector (2).svg",
      money: "$ 6.795,85",
    },
    {
      icon: "dogecoin 3.svg",
      text: "Dogecoin",
      arrow: "Vector (2).svg",
      money: "$ 6.795,85",
    },
    {
      icon: "dogecoin 3.svg",
      text: "Dogecoin",
      arrow: "Vector (2).svg",
      money: "$ 6.795,85",
    },
  ];

  const STable = [
    {
      star: "Group.png",
      img: "ETH Icon.png",
      title: "Ethereum",
      subtitle: "ETH",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#2A2A2D]",
    },
    {
      star: "Group.png",
      img: "ETH Icon (3).png",
      title: "Bitcoin",
      subtitle: "BTC",
      graph: "Graph BTC.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#000009]",
    },
    {
      star: "Wstar.png",
      img: "ETH Icon (2).png",
      title: "Litecoin",
      subtitle: "LTC",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#2A2A2D]",
    },
    {
      star: "Wstar.png",
      img: "ETH Icon (1).png",
      title: "Ripple",
      subtitle: "XRP",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#121212]",
      p:"pl-4"
    },
    {
      star: "Group.png",
      img: "ETH Icon.png",
      title: "Ethereum",
      subtitle: "ETH",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#2A2A2D]",
    },
    {
      star: "Group.png",
      img: "ETH Icon.png",
      title: "Ethereum",
      subtitle: "ETH",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#121212]",
    },
    {
      star: "Group.png",
      img: "ETH Icon.png",
      title: "Ethereum",
      subtitle: "ETH",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#2A2A2D]",
    },
    {
      star: "Group.png",
      img: "ETH Icon.png",
      title: "Ethereum",
      subtitle: "ETH",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#121212]",
    },
    {
      star: "Group.png",
      img: "ETH Icon.png",
      title: "Ethereum",
      subtitle: "ETH",
      graph: "Graph ETH.png",
      money: "$503.12",
      submoney: "50 ETH",
      num: "0",
      subnum: "BTC",
      perc: "10%",
      subperc: "000000000",
      bg: "bg-[#2A2A2D]",
    },
  ];

  console.log(STable);
  return (
    <div className="h-full py-32">
      <div className="intro text-white text-center">
        <h1 className="font-medium text-[53px] max-sm:px-1.5">
          Trade Like a <span className="text-[#72FDFC]">Pro</span>
        </h1>
        <h2 className="font-medium text-2xl">
          Get the lowest fees, fastest transactions, powerful APIs, and more
        </h2>
      </div>
      <div className="Mtable flex flex-wrap items-center justify-center gap-4 bg-[#121212] p-8 rounded-lg mt-8">
        <div className="GTable max-lg:overflow-x-scroll w-[70%] max-sm:w-[100%] py-6 bg-[#2A2A2D]  rounded-xl  ">
          <div className="tnav flex mb-4 items-center justify-between">
            <div className="btn mx-5 flex items-center gap-3">
              <button className=" bg-[#232121] text-[#72FDFC] flex items-center gap-2 px-6 font-semibold py-2 rounded-lg">
                Favorites <img src="Group.png" alt="" />
              </button>
              <button className="px-6 font-semibold bg-[#72FDFC] py-2 rounded-lg">
                BTC
              </button>
              <button className="px-6 text-white  bg-[#000009] font-semibold py-2 rounded-lg">
                ETH
              </button>
              <button className="px-6  text-white bg-[#000009] font-semibold py-2 rounded-lg">
                FIAT
              </button>
            </div>
            <div className="search mx-5">
              <div className="flex items-center bg-[#121212] text-gray-400 rounded-lg  px-[59px] py-2 w-[300px] shadow-md">
                <input
                  type="text"
                  placeholder="Enter Your Search"
                  className="bg-transparent outline-none text-sm flex-grow placeholder-gray-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.485-5.18a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {STable.map((item, index) => (
            <div
              key={index}
              className={`flex text-white items-center justify-between px-6 py-4  ${item.bg}`}
            >
              <div className="flex justify-between items-center gap-8">
                <img src={item.star} alt="" />

                <img src={item.img} alt="" />
              <div>
                <h5 className="font-bold">{item.title}</h5>
                <p className="text-[#6C757D]">{item.subtitle}</p>
              </div>
              </div>
              <div className="">

              </div>
              <img src={item.graph} alt="" />

              <div className={`${item.p}`}>
                <h5 className="font-bold">{item.money}</h5>
                <p className="text-[#6C757D]">{item.submoney}</p>
              </div>
              <div>
                <h5 className="font-bold">{item.num}</h5>
                <p className="text-[#6C757D]">{item.subnum}</p>
              </div>
              <div>
                <h5 className="font-bold">{item.perc}</h5>
                <p className="text-[#6C757D]">{item.subperc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="tranTable bg-[#2A2A2D] p-4 rounded-xl ">
          <div className="flex justify-between items-center text-white mb-4">
            <h1 className="text-lg font-bold">Transactions</h1>
            <a href="#" className="text-[#72FDFC] text-sm">
              View all &gt;
            </a>
          </div>
          <div className="flex flex-col gap-4">
            {TTable.map((item, index) => (
              <div key={index} className="flex justify-between items-center  ">
                <div className="flex items-center gap-4">
                  <div>
                    <img className={item.css} src={item.icon} alt={item.text} />
                  </div>
                  <p className="text-white">{item.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={item.arrow} alt="arrow" />
                  <p className="text-white">{item.money}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeTable;

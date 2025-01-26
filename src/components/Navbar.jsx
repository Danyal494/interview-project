import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1192) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    
    const handleResize = () => {
      if (window.innerWidth <1192) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mobile ? (
    <ResMobile />
  ) : (
    <div className="flex items-center bg-[#121212] justify-between py-2 px-10">
      <div className="flex items-center">
        <div className="logo mx-16 ">
          <img className="w-[381px] h-[75px]" src="pressx-logo-white.svg" alt="" />
        </div>
        <div className="navbtn text-white">
          <a className="mx-4" href="">
            Home
          </a>
          <a className="mx-4" href="">
            Trade
          </a>
          <a className="mx-4" href="">
            Insta Trade
          </a>
        </div>
      </div>

      <div className="loginbtn  flex items-center gap-16">
        <button className="bg-[#72FDFC] px-6 font-semibold py-2 rounded-lg">Login</button>
        <button>
          <img className="size-6" src="./Vector.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

const ResMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-[#121212]  items-center justify-between px-8  py-2 ">
      <div className="logo  mr-7 ">
        <img className="w-[381px] h-[75px]" src="pressx-logo-white.svg" alt="" />
      </div>


      <div className="DropDown">
        <button
          className="text-white font-semibold py-2 px-4 bg-[#72FDFC] rounded-lg"
          onClick={toggleDropdown}
        >
          Menu
        </button>

      
        {isOpen && (
          <div className="navbtn absolute right-4  h-[250px] bg-[#121212] p-4 rounded-2xl text-white mt-4">
            <div className="flex flex-col gap-4">

            <a className="mx-4" href="">
              Home
            </a>
            <a className="mx-4" href="">
              Trade
            </a>
            <a className="mx-4" href="">
              Insta Trade
            </a>
            </div>
            <div className="flex-col flex items-center">

            <button className="bg-[#72FDFC] px-6 font-semibold py-2 rounded-lg mt-4">
          Login
        </button>

        <button>
          <img className="size-6 mt-4" src="./Vector.svg" alt="" />
        </button>
            </div>
          </div>
        )}

   
       
      </div>
    </div>
  );
};

export default Navbar;

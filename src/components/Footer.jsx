import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    const checkDeviceSize = () => {
      setIsSmallDevice(window.innerWidth < 600);
    };

    checkDeviceSize();

    // Add resize listener
    window.addEventListener("resize", checkDeviceSize);

    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-white bg-[#121212] py-3 text-center">
      <p className="text-2xl">
        Copyright © 2024 by <span className="text-[#72FDFC]">PressX</span>
      </p>
      <p className="text-xl font-medium py-1">All Rights Reserved.</p>
      <p className="text-sm font-[400] max-sm:px-2">
        Disclaimer: The purchase of digital currencies is conducted through
        PressX. By accessing this site, you agree to be bound by its Terms of
        Service and Privacy Policy.
      </p>
      <div className="text-justify text-sm font-[400] px-14 mt-2">
        {isSmallDevice ? (
          <>
            <p>
              Digital currencies are not currently backed nor supported by any
              government or central bank. The value of digital currencies is
              determined by the economy of supply and demand, and they are more
              volatile than traditional currencies. Trading in digital
              currencies comes with significant risks, including volatile market
              price swings or flash crashes, market manipulation, and
              cybersecurity risks.{" "}
              {isExpanded && (
                <>
                  In addition, digital currency markets and exchanges are not
                  regulated with the same controls or customer protections
                  available in equity, option, futures, or foreign exchange
                  investing. Digital currency trading requires knowledge of
                  digital currency markets. In attempting to profit through
                  digital currency trading, you must compete with traders
                  worldwide. You should have appropriate knowledge and
                  experience before engaging in substantial digital currency
                  trading. Digital currency trading may not generally be
                  appropriate, particularly with funds drawn from retirement
                  savings, student loans, mortgages, emergency funds, or funds
                  set aside for other purposes. Digital currency trading can
                  lead to large and immediate financial losses. Under certain
                  market conditions, you may find it difficult or impossible to
                  liquidate a position quickly at a reasonable price. This can
                  occur, for example, when the market for a particular digital
                  currency suddenly drops, or if trading is halted due to recent
                  news events, unusual trading activity, or changes in the
                  underlying digital currency system. Several federal agencies
                  have also published advisory documents surrounding the risks
                  of virtual currency. For more information see the{" "}
                  <span className="underline">CFPB’s Consumer Advisory</span>,
                  the <span className="underline">CFTC’s Customer Advisory</span>
                  , the <span className="underline">SEC’s Investor Alert</span>,
                  and <span className="underline">FINRA’s Investor Alert</span>.
                </>
              )}
            </p>
            <button
              className="font-bold"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less.." : "Read More.."}
            </button>
          </>
        ) : (
          <p>
            Digital currencies are not currently backed nor supported by any
            government or central bank. The value of digital currencies is
            determined by the economy of supply and demand, and they are more
            volatile than traditional currencies. Trading in digital currencies
            comes with significant risks, including volatile market price swings
            or flash crashes, market manipulation, and cybersecurity risks. In
            addition, digital currency markets and exchanges are not regulated
            with the same controls or customer protections available in equity,
            option, futures, or foreign exchange investing. Digital currency
            trading requires knowledge of digital currency markets. In
            attempting to profit through digital currency trading, you must
            compete with traders worldwide. You should have appropriate
            knowledge and experience before engaging in substantial digital
            currency trading. Digital currency trading may not generally be
            appropriate, particularly with funds drawn from retirement savings,
            student loans, mortgages, emergency funds, or funds set aside for
            other purposes. Digital currency trading can lead to large and
            immediate financial losses. Under certain market conditions, you may
            find it difficult or impossible to liquidate a position quickly at a
            reasonable price. This can occur, for example, when the market for a
            particular digital currency suddenly drops, or if trading is halted
            due to recent news events, unusual trading activity, or changes in
            the underlying digital currency system. Several federal agencies
            have also published advisory documents surrounding the risks of
            virtual currency. For more information see the{" "}
            <span className="underline">CFPB’s Consumer Advisory</span>, the{" "}
            <span className="underline">CFTC’s Customer Advisory</span>, the{" "}
            <span className="underline">SEC’s Investor Alert</span>, and{" "}
            <span className="underline">FINRA’s Investor Alert</span>.
          </p>
        )}
        <p className="mt-2">
          PressX does not make any investment recommendations. Neither the
          listing of a digital currency on this website nor any other
          communication, whether made through this website or in any other way,
          should be construed as a recommendation to buy or sell any security.
        </p>
      </div>
    </div>
  );
};

export default Footer;

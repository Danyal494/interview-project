import React from "react";

const FooterLinks = () => {
  const list = [
    { name: "Currencies" },
    { name: "Asset Status" },
    { name: "Exchange Fees" },
    { name: "Trading Rules" },
    { name: "Api Documentation" },
    { name: "Support" },
  ];

  return (
    <div className="max-sm:flex flex-col items-center text-center gap-4 p-6 ">
      {list.map((item, index) => (
        <a key={index} href="" target="_blank" rel="noopener noreferrer" className="text-[#72FDFC] mx-6">
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;

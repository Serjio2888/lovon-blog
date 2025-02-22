import React from "react";
import Image from "next/image";

const ProBadge = () => {
  return (
    <div className="absolute right-0 z-10 m-5 flex rounded-md bg-orange px-2.5 py-1.5 text-base uppercase text-white">
      <Image
        src={"/images/icons/pro-icon.svg"}
        alt="icon"
        width={15}
        height={15}
        className="mr-1.5"
      />{" "}
      <span>pro</span>
    </div>
  );
};

export default ProBadge;

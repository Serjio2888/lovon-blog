import React from "react";
import Image from "next/image";

const MemberBadge = () => {
  return (
    <div className="absolute right-0 z-10 m-5 flex rounded-md bg-primary px-2.5 py-1.5 text-base capitalize text-white">
      <Image
        src={"/images/icons/member-icon.svg"}
        alt="icon"
        width={22}
        height={22}
        className="mr-1.5"
      />{" "}
      <span>member Only</span>
    </div>
  );
};

export default MemberBadge;

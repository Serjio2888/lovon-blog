import Link from "next/link";
import React from "react";

const Breadcrumb = () => {
  return (
    <div className="flex flex-wrap justify-between pb-8.5">
      <h1 className="text-2xl font-bold text-dark">Account Settings</h1>
      <p className="text-body">
        <Link href={"/"}>Home</Link> / Account Setting
      </p>
    </div>
  );
};

export default Breadcrumb;

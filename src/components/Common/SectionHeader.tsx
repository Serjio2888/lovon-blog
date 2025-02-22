import React from "react";
type Data = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: Data) => {
  return (
    <>
      <div className="mb-12.5 text-center">
        <h2 className="mb-3.5 text-2xl font-bold text-dark sm:text-4xl xl:text-heading-3">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default SectionHeader;

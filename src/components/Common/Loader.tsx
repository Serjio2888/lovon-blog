import React from "react";

const Loader = () => {
  return (
    <span
      className={`h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-t-transparent ml-1.5`}
    ></span>
  );
};

export default Loader;

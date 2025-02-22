import React from "react";

const SignupOption = ({ isPassword, setIsPassword }: { isPassword: any; setIsPassword: any }) => {
  return (
    <div className="border-gray-4 dark:border-strokedark mx-auto mb-12.5 flex flex-col items-center justify-center gap-1 rounded-lg border p-1 md:flex-row mt-9">
      <button
        className={`w-full rounded-lg px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary 
        dark:hover:shadow-none ${
          !isPassword &&
          "border bg-primary/5 text-primary border-primary"
        }`}
        onClick={() => setIsPassword(false)}
      >
        Magic Link
      </button>
      <button
        className={`w-full rounded-lg px-6 py-3 text-base outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none ${
          isPassword &&
          "border bg-primary/5 text-primary border-primary"
        }`}
        onClick={() => setIsPassword(true)}
      >
        Password
      </button>
    </div>
  );
};

export default SignupOption;

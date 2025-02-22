"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = data;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email) {
      return toast.error("Something went wrong!");
    }

    axios
      .post("/api/update-profile", {
        name,
        email,
      })
      .then(() => {
        toast.success("Profile has been updated!");
        setData({
          name: "",
          email: "",
        });
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <div className="max-w-[550px] ">
      <div className=" rounded-xl bg-white px-5 py-10 shadow-box sm:p-7.5 xl:p-10 ">
        <h2 className="mb-3.5 text-custom-4 font-bold text-dark">
          Edit Profile
        </h2>

        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-3 block text-custom-sm font-medium text-dark"
              >
                Your Name
              </label>
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-3 block text-custom-sm font-medium text-dark"
              >
                Email address
              </label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import axios from "axios";

const ChangePassword = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    reTypeNew: "",
  });

  const { data: session } = useSession();
  const { currentPassword, newPassword } = data;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!currentPassword || !newPassword) {
      return toast.error("Missing fields!");
    }

    axios
      .post("/api/update-password", {
        currentPassword,
        newPassword,
        email: session?.user?.email,
      })
      .then(() => {
        toast.success("Password has been updated!");
        setData({
          currentPassword: "",
          newPassword: "",
          reTypeNew: "",
        });
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <div className="max-w-[550px] rounded-xl bg-white p-4 shadow-box sm:p-7.5 xl:p-10 ">
      <h2 className="mb-3.5 text-custom-4 font-bold text-dark">Password</h2>

      <div className="mt-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="currentPassword"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Current password
            </label>
            <input
              value={data.currentPassword}
              onChange={(e) =>
                setData({ ...data, currentPassword: e.target.value })
              }
              type="text"
              placeholder="Enter your current password"
              required
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              New password
            </label>
            <input
              value={data.newPassword}
              onChange={(e) =>
                setData({ ...data, newPassword: e.target.value })
              }
              type="text"
              placeholder="Enter your new password"
              required
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Re-type new password
            </label>
            <input
              value={data.reTypeNew}
              onChange={(e) => setData({ ...data, reTypeNew: e.target.value })}
              type="text"
              placeholder="Re-type new password"
              required
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

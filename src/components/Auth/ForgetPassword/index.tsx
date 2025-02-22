"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "@/components/Common/Loader";
import { z } from "zod";
import { integrations, messages } from "../../../../integrations.config";
const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages?.auth);
      return;
    }

    const result = schema.safeParse({ email });
    if (!result.success) {
      const firstError = result.error.errors[0]?.message;
      toast.error(firstError);
      return;
    }

    setLoader(true);

    try {
      const res = await axios.post("/api/forgot-password/reset", {
        email: email.toLowerCase(),
      });

      if (res.status === 404) {
        toast.error("User not found.");
        return;
      }

      if (res.status === 200) {
        toast.success(res.data);
        setEmail("");
      }

      setEmail("");
      setLoader(false);
    } catch (error: any) {
      toast.error(error?.response.data);
      setLoader(false);
    }
  };

  return (
    <section className="bg-gray pb-15 pt-34 lg:pb-20 lg:pt-39">
      <div className="mx-auto max-w-[520px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-xl bg-white p-4 shadow-box sm:p-7.5 xl:p-12.5">
          <div className="mb-9 text-center">
            <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Forgot Password?{" "}
            </h1>
            <p className="text-body">
              Enter the email address associated with your account and we’ll
              send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-3 block text-custom-sm font-medium text-dark"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
            >
              Sign in {loader ? <Loader /> : null}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

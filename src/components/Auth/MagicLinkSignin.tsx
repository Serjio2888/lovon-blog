import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { validateEmail } from "@/libs/validateEmail";
import Loader from "../Common/Loader";
import z from "zod";
import { integrations, messages } from "../../../integrations.config";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const MagicLinkSignin = ({ isSignup }: any) => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const signinWithMail = (e: any) => {
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
    if (!validateEmail(email)) {
      setLoader(false);
      return toast.error("Please enter a valid email address.");
    } else {
      signIn("email", {
        redirect: false,
        email: email,
      })
        .then((callback) => {
          if (callback?.ok) {
            toast.success("Email sent");
            setEmail("");
          }
        })
        .catch((error) => {
          toast.error(error);
        });

      setLoader(false);
    }
  };

  return (
    <form onSubmit={signinWithMail}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-3 block text-custom-sm font-medium text-dark"
        >
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
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
        Sign in {loader && <Loader />}
      </button>

      {isSignup ? (
        <p className="mt-5 text-center">
          Don&apos;t have an account?
          <Link href="/auth/signup" className="ml-1 text-dark">
            Sign Up for Free
          </Link>
        </p>
      ) : (
        <p className="mt-5 text-center">
          Already a member?
          <Link href="/auth/signin" className="ml-1 text-dark">
            Sign in
          </Link>
        </p>
      )}
    </form>
  );
};

export default MagicLinkSignin;

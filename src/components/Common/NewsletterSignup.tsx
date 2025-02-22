"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import Image from "next/image";
import Loader from "./Loader";
import z from "zod";
import { integrations, messages } from "../../../integrations.config";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isMailchimpEnabled) {
      toast.error(messages?.mailchimp);
      return;
    }

    const result = schema.safeParse({ email });
    if (!result.success) {
      const firstError = result.error.errors[0]?.message;
      toast.error(firstError);
      return;
    }

    try {
      setLoader(true);
      const res = await axios.post("/api/newsletter", { email });

      if (res.data.status == 400) {
        toast.error(res.data?.title);
        setEmail("");
      } else {
        toast.success("Thanks for signing up!");
        setEmail("");
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setLoader(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-gray py-12.5">
      <div className="absolute left-0 top-0 -z-1 h-full w-full">
        <Image
          src="/images/newsletter/bg-dots.svg"
          width={1349}
          height={183}
          alt="dot"
        />
      </div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-white px-4 py-9 shadow-1 sm:px-8 xl:px-10">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="w-full max-w-[455px]">
              <h3 className="mb-3 text-heading-6 font-semibold text-dark">
                Subscribe to Newsletter
              </h3>
              <p>
                Provide your email to get email notification when we launch new
                products or publish new articles
              </p>
            </div>
            <div className="w-full max-w-[494px]">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-5">
                  <div className="w-full max-w-[350px]">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-md bg-dark px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90"
                  >
                    Subscribe {loader && <Loader />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;

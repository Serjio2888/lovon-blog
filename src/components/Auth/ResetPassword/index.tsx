"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Common/Loader";
import { z } from "zod";

const schema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter.",
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter.",
      })
      .refine((val) => /\d/.test(val), {
        message: "Password must contain at least one number.",
      })
      .refine((val) => /[@$!%*?&]/.test(val), {
        message: "Password must contain at least one special character.",
      }),

    ReNewPassword: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters long",
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: "Password must contain at least one uppercase letter.",
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Password must contain at least one lowercase letter.",
      })
      .refine((val) => /\d/.test(val), {
        message: "Password must contain at least one number.",
      })
      .refine((val) => /[@$!%*?&]/.test(val), {
        message: "Password must contain at least one special character.",
      }),
  })
  .refine((data) => data.newPassword === data.ReNewPassword, {
    message: "Passwords do not match.",
    path: ["ReNewPassword"], // Set the path to show the error under ReNewPassword
  });

const ResetPassword = ({ token }: { token: string }) => {
  const [data, setData] = useState({
    newPassword: "",
    ReNewPassword: "",
  });
  const [loader, setLoader] = useState(false);

  const [user, setUser] = useState({
    email: "",
  });

  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(`/api/forgot-password/verify-token`, {
          token,
        });

        if (res.status === 200) {
          setUser({
            email: res.data.email,
          });
        }
      } catch (error: any) {
        toast.error(error.response.data);
        router.push("/auth/forgot-password");
      }
    };

    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    const result = schema.safeParse(data);
    if (!result.success) {
      const firstError = result.error.errors[0]?.message;
      toast.error(firstError);
      setLoader(false);
      return;
    }

    try {
      const res = await axios.post(`/api/forgot-password/update`, {
        email: user?.email,
        password: data.newPassword,
      });

      if (res.status === 200) {
        toast.success(res.data);
        setData({ newPassword: "", ReNewPassword: "" });
        router.push("/auth/signin");
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setLoader(false);
    }
  };

  return (
    <section className="bg-gray pb-15 pt-34 lg:pb-20 lg:pt-39">
      <div className="mx-auto max-w-[520px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-xl bg-white p-4 shadow-box sm:p-7.5 xl:p-12.5">
          <div className="mb-9 text-center">
            <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Reset Password?{" "}
            </h1>
            <p className="text-body">
              Create new password to save your account
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="mb-3 block text-custom-sm font-medium text-dark"
              >
                New Password
              </label>
              <input
                value={data.newPassword}
                onChange={handleChange}
                type="text"
                name="newPassword"
                required
                placeholder="New Password"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="ReNewPassword"
                className="mb-3 block text-custom-sm font-medium text-dark"
              >
                New Password
              </label>
              <input
                value={data.ReNewPassword}
                onChange={handleChange}
                type="text"
                name="ReNewPassword"
                required
                placeholder="Re-TYpe New Password"
                className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
            >
              Sign in {loader && <Loader />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;

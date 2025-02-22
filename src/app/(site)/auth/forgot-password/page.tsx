import React from "react";
import ForgetPassword from "@/components/Auth/ForgetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Forgot Password - ${process.env.SITE_NAME}`,
  description: `This is Forgot Password page for ${process.env.SITE_NAME}`,
};

const ForgotPasswordPage = () => {
  return (
    <main className="bg-gray">
      <ForgetPassword />
    </main>
  );
};

export default ForgotPasswordPage;

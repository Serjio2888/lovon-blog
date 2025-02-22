import SignIn from "@/components/Auth/SignIn";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin | NextBlog - Next.js Blog Template",
  description: "This is signin page for NextBlog",
};

const SignInPage = () => {
  return (
    <main>
      <SignIn />
    </main>
  );
};

export default SignInPage;

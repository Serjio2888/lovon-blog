import React from "react";
import { Metadata } from "next";
import PersonalBlog from "@/components/PersonalBlog";

export const metadata: Metadata = {
  title: "Personal Blog | NextBlog - Next.js Blog Template",
  description: "This is Personal Blog page for NextBlog",
  // other metaDescription
};

const PersonalBlogPage = () => {
  return <PersonalBlog />;
};

export default PersonalBlogPage;

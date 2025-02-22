import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import Authors from "@/components/Home/Authors";
import NewsletterSignup from "@/components/Common/NewsletterSignup";

export const metadata: Metadata = {
  title: "NextBlog - Next.js Blog Template",
  description: "This is Home Blog page for NextBlog",
  // other metaDescription
};

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Authors />
      <NewsletterSignup />
    </>
  );
}

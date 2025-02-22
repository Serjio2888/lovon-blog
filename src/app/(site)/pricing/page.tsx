import React from "react";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page | NextBlog - Next.js Blog Template",
  description: "This is Pricing Page page for NextBlog",
  // other metaDescription
};

const PricingPage = () => {
  return (
    <main>
      <Pricing />
    </main>
  );
};

export default PricingPage;

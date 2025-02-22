"use client";
import React from "react";
import PersonalInfoCard from "./PersonalInfoCard";
import PricingCard from "./PricingCard";
import { useSession } from "next-auth/react";

const Pricing = () => {
  const { data: session } = useSession();
  return (
    <section className="bg-gray pb-15 pt-34 lg:pb-20 lg:pt-39">
      <div
        className={`mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-12 bg-white p-10 px-4 sm:px-8 md:flex-row`}
      >
        {!session && <PersonalInfoCard />}

        <PricingCard />
      </div>
    </section>
  );
};

export default Pricing;

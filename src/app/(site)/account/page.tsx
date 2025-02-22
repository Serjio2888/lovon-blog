import { redirect } from "next/navigation";
import React from "react";
import { getAuthSession } from "@/stripe/auth";
import UpdateProfile from "@/components/AccountDetails/UpdateProfile";
import ChangePassword from "@/components/AccountDetails/ChangePassword";
import Breadcrumb from "@/components/AccountDetails/Breadcrumb";
import ManageSubscriptionCard from "@/components/AccountDetails/ManageSubscriptionCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Details | NextBlog - Next.js Blog Template",
  description: "This is Account Details page for NextBlog",
};

const Stripe = async () => {
  const session = await getAuthSession();
  if (!session?.user) return redirect("/");

  return (
    <main>
      <section className="pb-17.5 pt-34">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <Breadcrumb />

          <div className="grid grid-cols-1 flex-wrap gap-20 lg:justify-between xl:grid-cols-2 ">
            <UpdateProfile />
            <ChangePassword />
          </div>
          <ManageSubscriptionCard />
        </div>
      </section>
    </main>
  );
};

export default Stripe;

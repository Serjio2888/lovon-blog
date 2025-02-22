"use client";
import { subscriptionData } from "@/stripe/SubsPlanData";
import { SubscriptionPlan } from "@/types/subscription";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { integrations, messages } from "../../../integrations.config";

const PricingCard = () => {
  const plan = subscriptionData[0];
  const [subscriptionPlan, setSubscriptionPlan] = useState<SubscriptionPlan>();
  const { data: session } = useSession();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "/api/subscription/get-stripe-subscription-data",
      );
      setSubscriptionPlan(res.data.subscriptionPlan);
    }

    if (integrations?.isStripeEnabled) {
      getData();
    }
  }, [setSubscriptionPlan]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!integrations?.isStripeEnabled) {
      toast.error(messages?.stripe);
      return;
    }

    const subsProp = {
      userId: session?.user?.id,
      email: session?.user?.email,
      stripePriceId: plan.stripePriceId,
      stripeCustomerId: subscriptionPlan?.stripeCustomerId,
      isSubscribed: !!subscriptionPlan?.isSubscribed,
      isCurrentPlan: subscriptionPlan?.name === plan.name,
      isCanceled: subscriptionPlan?.isCanceled,
    };

    try {
      const res = await axios.post("/api/subscription", {
        ...subsProp,
      });

      const session = res.data;

      if (session) {
        window.location.href = session.url ?? "/account";
        if (window.location.pathname === "/account") {
          // Reload the "account" page
          window.location.reload();
        }
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return (
    <div className="max-w-[410px] bg-white px-4 sm:px-8 xl:px-0">
      <div className="mx-auto w-full bg-gray p-11">
        <div className="flex gap-5 pb-9">
          <Image
            src={"/images/icons/pro-rounded.svg"}
            width={60}
            height={60}
            alt="icon"
          />
          <div>
            <h2 className="text-2xl font-bold text-dark">Pro Membership</h2>
            <p>Monthly</p>
          </div>
        </div>
        <div>
          <p className="pb-5">
            <span className="pr-1 text-heading-3 font-bold text-dark">
              ${plan.price && plan?.price / 100}
            </span>
            per month
          </p>

          <ul>
            <li className="flex gap-1 pb-2.5">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7637 9.99996C16.7637 14.2085 13.3521 17.6201 9.14358 17.6201C4.93509 17.6201 1.52344 14.2085 1.52344 9.99996C1.52344 5.79148 4.93509 2.37982 9.14358 2.37982C13.3521 2.37982 16.7637 5.79148 16.7637 9.99996ZM12.2147 7.69081C12.4379 7.914 12.4379 8.27586 12.2147 8.49905L8.40468 12.3091C8.18149 12.5323 7.81963 12.5323 7.59644 12.3091L6.07241 10.7851C5.84922 10.5619 5.84922 10.2 6.07241 9.97685C6.2956 9.75366 6.65746 9.75366 6.88065 9.97685L8.00056 11.0968L9.70353 9.39379L11.4065 7.69081C11.6297 7.46762 11.9916 7.46762 12.2147 7.69081Z"
                  fill="#22AD5C"
                />
              </svg>

              <p>Access to all pro blog posts</p>
            </li>
            <li className="flex gap-1 pb-2.5">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7637 9.99996C16.7637 14.2085 13.3521 17.6201 9.14358 17.6201C4.93509 17.6201 1.52344 14.2085 1.52344 9.99996C1.52344 5.79148 4.93509 2.37982 9.14358 2.37982C13.3521 2.37982 16.7637 5.79148 16.7637 9.99996ZM12.2147 7.69081C12.4379 7.914 12.4379 8.27586 12.2147 8.49905L8.40468 12.3091C8.18149 12.5323 7.81963 12.5323 7.59644 12.3091L6.07241 10.7851C5.84922 10.5619 5.84922 10.2 6.07241 9.97685C6.2956 9.75366 6.65746 9.75366 6.88065 9.97685L8.00056 11.0968L9.70353 9.39379L11.4065 7.69081C11.6297 7.46762 11.9916 7.46762 12.2147 7.69081Z"
                  fill="#22AD5C"
                />
              </svg>

              <p>Will get regular updates</p>
            </li>
            <li className="flex gap-1 pb-2.5">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7637 9.99996C16.7637 14.2085 13.3521 17.6201 9.14358 17.6201C4.93509 17.6201 1.52344 14.2085 1.52344 9.99996C1.52344 5.79148 4.93509 2.37982 9.14358 2.37982C13.3521 2.37982 16.7637 5.79148 16.7637 9.99996ZM12.2147 7.69081C12.4379 7.914 12.4379 8.27586 12.2147 8.49905L8.40468 12.3091C8.18149 12.5323 7.81963 12.5323 7.59644 12.3091L6.07241 10.7851C5.84922 10.5619 5.84922 10.2 6.07241 9.97685C6.2956 9.75366 6.65746 9.75366 6.88065 9.97685L8.00056 11.0968L9.70353 9.39379L11.4065 7.69081C11.6297 7.46762 11.9916 7.46762 12.2147 7.69081Z"
                  fill="#22AD5C"
                />
              </svg>

              <p>All Pro Features</p>
            </li>
            <li className="flex gap-1 pb-2.5">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7637 9.99996C16.7637 14.2085 13.3521 17.6201 9.14358 17.6201C4.93509 17.6201 1.52344 14.2085 1.52344 9.99996C1.52344 5.79148 4.93509 2.37982 9.14358 2.37982C13.3521 2.37982 16.7637 5.79148 16.7637 9.99996ZM12.2147 7.69081C12.4379 7.914 12.4379 8.27586 12.2147 8.49905L8.40468 12.3091C8.18149 12.5323 7.81963 12.5323 7.59644 12.3091L6.07241 10.7851C5.84922 10.5619 5.84922 10.2 6.07241 9.97685C6.2956 9.75366 6.65746 9.75366 6.88065 9.97685L8.00056 11.0968L9.70353 9.39379L11.4065 7.69081C11.6297 7.46762 11.9916 7.46762 12.2147 7.69081Z"
                  fill="#22AD5C"
                />
              </svg>

              <p>All Essential Post and Features </p>
            </li>
          </ul>

          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              className="mt-9 flex w-full justify-center rounded-md bg-primary px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50"
              disabled={session ? false : true}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

import { SubscriptionPlan } from "@/types/subscription";
import React, { useState, createContext, useContext } from "react";
import axios from "axios";

const StripeSessionContext = createContext<SubscriptionPlan | undefined>(
  undefined,
);
 
export const useStripeSession = () => {
  const context = useContext(StripeSessionContext);
  if (!context) {
    throw new Error(
      "Stripe Session must be used within a Stripe Session Provider",
    );
  }
  return context;
};

export function StripeSessionProvider({ children }: { children: React.ReactNode }) {
  const [isSubscribed, setIsSubscribed] = useState(Boolean);

  async function getData() {
    try {
      const res = await axios.get(
        "/api/subscription/get-stripe-subscription-data",
      );
      setIsSubscribed(res.data.subscriptionPlan?.isSubscribed);
    } catch (error: any) {
      console.log({ message: error?.message });
    }
  }

  getData();

  return (
    <StripeSessionContext.Provider value={{ isSubscribed }}>
      {children}
    </StripeSessionContext.Provider>
  );
}

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/stripe/stripe";
import { absoluteUrl } from "@/libs/utils";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    isSubscribed,
    stripeCustomerId,
    isCurrentPlan,
    email,
    stripePriceId,
    userId,
  } = body;

  const billingUrl = absoluteUrl("/account");

  if (isSubscribed && stripeCustomerId && isCurrentPlan) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: billingUrl,
    });

    return NextResponse.json({ url: stripeSession.url }, { status: 200 });
  }

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: billingUrl,
    cancel_url: billingUrl,
    payment_method_types: ["card"],
    mode: "subscription",
    billing_address_collection: "auto",
    customer_email: email,
    line_items: [
      {
        price: stripePriceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId: userId,
    },
  });

  return NextResponse.json({ url: stripeSession.url }, { status: 200 });
}

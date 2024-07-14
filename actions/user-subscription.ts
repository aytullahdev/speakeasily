"use server";

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { getUserSubscriptions } from "@/db/queries";
import { supbaseServer } from "@/db/supabaseServer";

const returnUrl = absoluteUrl("/shop");

export const createStripeUrl = async () => {
  const { data } = await supbaseServer.auth.getUser();
  const user = data?.user;
  const userId = data?.user?.id;

  if (!user || !userId) {
    throw new Error("Unauthorized");
  }

  const userSubscription = await getUserSubscriptions();

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl,
    });

    return { data: stripeSession.url };
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: user.email,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: "Speak Easily Subscription",
            description: "Unlimited Heats",
          },
          unit_amount: 999,
          recurring: {
            interval: "month",
          },
        },
      },
    ],
    metadata: {
      userId,
    },
    success_url: returnUrl,
    cancel_url: returnUrl,
  });

  return { data: stripeSession.url };
};

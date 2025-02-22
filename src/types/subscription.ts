export type SubscriptionPlan = {
  stripeSubscriptionId?: string;
  stripeCurrentPeriodEnd?: Date;
  stripeCustomerId?: string;
  isSubscribed?: boolean;
  isCanceled?: boolean;
  id?: string;
  name?: string;
  description?: string;
  stripePriceId?: string;
  price?: number;
};

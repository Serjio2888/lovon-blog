export type SubsButtonProp = {
  [x: string]: any;
  userId: string;
  email: string;
  isCurrentPlan: boolean;
  isSubscribed: boolean;
  stripeCustomerId?: string | null;
  stripePriceId: string;
  isCanceled: boolean;
};

import { getAuthSession } from "@/stripe/auth";
import { getUserSubscriptionPlan } from "@/stripe/subscription";
import { subscriptionData } from "../../stripe/SubsPlanData";
import ManageSubscriptionButton from "./ManageSubsBtn";

const ManageSubscriptionCard = async () => {
  const session = await getAuthSession();
  const subscriptionPlan = await getUserSubscriptionPlan();

  if (!session || !session.user) {
    throw new Error("User not found.");
  }

  const user = session?.user;

  return (
    <div className="max-w-[550px] rounded-xl bg-white p-4 shadow-box sm:p-7.5 xl:p-10">
      <p>Current Plan</p>
      <p className="pt-1.5 text-2xl font-bold text-dark">
        {subscriptionPlan?.isSubscribed
          ? "Pro Membership is activated "
          : "FREE Membership is activated"}
      </p>

      {!subscriptionPlan?.isSubscribed && (
        <div>
          <div className="py-6">
            <p className="text-lg font-bold text-dark">
              Features that you are missing right now ☹️
            </p>
            <p>Upgrage your plan now to enjoy all of these features</p>
          </div>

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
        </div>
      )}

      <p className={`${!subscriptionPlan?.isSubscribed ? "hidden" : "block"}`}>
        {subscriptionPlan?.isCanceled
          ? "Your plan will be canceled on "
          : "Your plan renews on "}
        {subscriptionPlan?.stripeCurrentPeriodEnd
          ? subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString()
          : null}
      </p>

      {subscriptionData.map((plan) => (
        <>
          {user && (
            <ManageSubscriptionButton
              userId={user.id}
              email={user.email || ""}
              stripePriceId={plan?.stripePriceId!}
              stripeCustomerId={subscriptionPlan?.stripeCustomerId}
              isSubscribed={!!subscriptionPlan?.isSubscribed}
              isCurrentPlan={subscriptionPlan?.name === plan.name}
              isCanceled={subscriptionPlan?.isCanceled!}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default ManageSubscriptionCard;

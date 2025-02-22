export function absoluteUrl(path: string) {
  return `${
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/"
  }${path}`;
}

export function generatePostDetailsLink(post: any, isLoggedin:any, isSubscribed: any) {
  const postDetailsLink =
    (post.accessLevel === "user" && isLoggedin) ||
    (isLoggedin && isSubscribed) ||
    post.accessLevel === "free"
      ? `/posts/${post.slug.current}`
      : !isLoggedin && post.accessLevel === "user"
      ? "/auth/signin"
      : "/pricing";

  return postDetailsLink;
}

export function isSubbedFromSession(user: any) {
  const isSubscribed =
    user.stripePriceId &&
    user.stripeCurrentPeriodEnd &&
    new Date(user.stripeCurrentPeriodEnd).getTime() + 86_400_000 > Date.now();

  return isSubscribed;
}

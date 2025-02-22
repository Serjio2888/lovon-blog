"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import { useSession } from "next-auth/react";
import { generatePostDetailsLink } from "@/libs/utils";
import ProBadge from "@/components/Badges/ProBadge";
import { useStripeSession } from "@/app/context/StripeSessionContext";
import MemberBadge from "@/components/Badges/MemberBadge";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, category, mainImage, author, publishedAt } = blog;

  let { isSubscribed } = useStripeSession();
  const { data: session } = useSession();

  const isLoggedin = session?.user;
  const postDetailsLink = generatePostDetailsLink(
    blog,
    isLoggedin,
    isSubscribed,
  );

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl bg-white p-2.5 shadow-1 sm:flex-row sm:items-center lg:max-w-[570px]">
      <div className="relative aspect-[238/180] w-full overflow-hidden">
        {blog.accessLevel === "user" && !isLoggedin && <MemberBadge />}
        {blog.accessLevel === "pro" && !isSubscribed && <ProBadge />}
        <Link href={postDetailsLink}>
          <Image
            className="w-full rounded-lg object-cover"
            src={imageBuilder(mainImage).url()!}
            alt={title}
            fill
          />
        </Link>
      </div>

      <div className="w-full lg:max-w-[272px]">
        <Link
          href={`/category/${category}`}
          className="mb-4 inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-sm font-medium capitalize text-blue"
        >
          {category}
        </Link>
        <h2 className="mb-3 text-custom-lg font-semibold text-dark">
          <Link href={postDetailsLink}>{title}</Link>
        </h2>
        <div className="flex items-center gap-2.5">
          <p className="text-sm">
            <Link href={`/author/${author?.slug.current}`}>
              By {author?.name}
            </Link>
          </p>

          <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>

          <p className="text-sm">
            {publishedAt &&
              new Date(publishedAt)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

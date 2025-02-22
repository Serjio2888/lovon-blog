"use client";
import { Blog } from "@/types/blog";
import React from "react";
import Image from "next/image";
import { imageBuilder } from "@/sanity/sanity-utils";
import Link from "next/link";
import { generatePostDetailsLink } from "@/libs/utils";
import { useSession } from "next-auth/react";
import ProBadge from "@/components/Badges/ProBadge";
import { useStripeSession } from "@/app/context/StripeSessionContext";
import MemberBadge from "@/components/Badges/MemberBadge";

const FirstBlog = ({ blog }: { blog: Blog }) => {
  const { title, category, mainImage, author, publishedAt, metaDescription } =
    blog;

  let { isSubscribed } = useStripeSession();
  const { data: session } = useSession();
  const isLoggedin = session?.user;

  const postDetailsLink = generatePostDetailsLink(
    blog,
    isLoggedin,
    isSubscribed,
  );

  return (
    <div className="flex w-full max-w-[1170px] flex-col gap-7.5 rounded-xl bg-white p-4 shadow-1 lg:flex-row lg:items-center lg:gap-11 lg:p-2.5">
      <div className=" relative aspect-[536/320] w-full">
        {blog.accessLevel === "user" && !isLoggedin && <MemberBadge />}
        {blog.accessLevel === "pro" && !isSubscribed && <ProBadge />}

        <Link href={postDetailsLink}>
          <Image
            className="w-full rounded-lg object-cover"
            src={imageBuilder(mainImage).url()!}
            alt={title}
            fill
            loading="eager"
          />
        </Link>
      </div>

      <div className="w-full lg:max-w-[540px]">
        <Link
          href={`/category/${category}`}
          className="mb-4 inline-flex rounded-full bg-purple/[0.08] px-3 py-1 text-sm font-medium capitalize text-purple-dark"
        >
          {category}
        </Link>
        <h1 className="mb-4 text-custom-4 font-bold text-dark xl:text-heading-4">
          <Link href={postDetailsLink}>{title}</Link>
        </h1>
        <p className="max-w-[524px]">{metaDescription}</p>
        <div className="mt-5 flex items-center gap-2.5">
          <Link
            href={`/author/${author?.slug.current}`}
            className="flex items-center gap-3"
          >
            <div className="flex h-6 w-6 overflow-hidden rounded-full">
              <Image
                src={imageBuilder(author?.image).url()!}
                alt="user"
                width={24}
                height={24}
              />
            </div>
            <p className="text-sm">{author?.name}</p>
          </Link>

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

export default FirstBlog;

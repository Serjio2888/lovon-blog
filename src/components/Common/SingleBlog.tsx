"use client";
import { useStripeSession } from "@/app/context/StripeSessionContext";
import { generatePostDetailsLink } from "@/libs/utils";
import { imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import MemberBadge from "../Badges/MemberBadge";
import ProBadge from "../Badges/ProBadge";
import { integrations, messages } from "../../../integrations.config";

const SingleBlog = ({ post }: { post: Blog }) => {
  let { isSubscribed }: any = useStripeSession();
  const { data: session } = useSession();
  const isLoggedin = session?.user;

  const postDetailsLink = generatePostDetailsLink(
    post,
    isLoggedin,
    isSubscribed,
  );

  return (
    <div className="group">
      <div className="relative mb-6 aspect-[370/280] w-full overflow-hidden rounded-[10px] transition-all group-hover:scale-105">
        {post.accessLevel === "user" && !isLoggedin && <MemberBadge />}
        {post.accessLevel === "pro" && !isSubscribed && <ProBadge />}

        {integrations?.isStripeEnabled ? (
          <Link href={postDetailsLink}>
            {post?.mainImage && (
              <Image
                src={imageBuilder(post.mainImage).url()!}
                alt={post.title}
                fill
                className="w-full object-cover"
              />
            )}
          </Link>
        ) : (
          <Link href={`/posts/${post.slug.current}`}>
            {post?.mainImage && (
              <Image
                src={imageBuilder(post.mainImage).url()!}
                alt={post.title}
                fill
                className="w-full object-cover"
              />
            )}
          </Link>
        )}
      </div>

      <h3>
        <Link
          href={postDetailsLink}
          className="mb-3.5 block text-xl font-bold text-dark"
        >
          <span className="bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
            {post.title}
          </span>
        </Link>
      </h3>
      <p>{post.metaDescription}</p>

      <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Link
            href={`/author/${post?.author?.slug?.current}`}
            className="flex items-center gap-3"
          >
            <div className="flex h-6 w-6 overflow-hidden rounded-full">
              {post?.author?.image && (
                <Image
                  src={imageBuilder(post.author.image).url()!}
                  width={24}
                  height={24}
                  alt="user"
                />
              )}
            </div>
            <p className="text-sm">{post?.author?.name}</p>
          </Link>

          <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>

          <p className="text-sm">
            {post.publishedAt &&
              new Date(post.publishedAt)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
          </p>
        </div>
        <Link
          href={`/category/${post.category}`}
          className="inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-sm font-medium capitalize text-blue"
        >
          {post.category}
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;

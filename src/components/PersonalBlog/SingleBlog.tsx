import React from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/dist/client/link";
import { imageBuilder } from "@/sanity/sanity-utils";
import { useSession } from "next-auth/react";
import ProBadge from "../Badges/ProBadge";
import { generatePostDetailsLink } from "@/libs/utils";
import MemberBadge from "../Badges/MemberBadge";
import { useStripeSession } from "@/app/context/StripeSessionContext";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { data: session } = useSession();

  const isLoggedin = session?.user;
  let { isSubscribed } = useStripeSession();
  const postDetailsLink = generatePostDetailsLink(
    blog,
    isLoggedin,
    isSubscribed,
  );

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-15">
      <div className="relative  aspect-[570/350] w-full overflow-hidden rounded-[10px] transition-all hover:scale-105">
        {blog.accessLevel === "user" && !isLoggedin && <MemberBadge />}
        {blog.accessLevel === "pro" && !isSubscribed && <ProBadge />}
        <Link href={postDetailsLink}>
          {blog?.mainImage && (
            <Image
              src={imageBuilder(blog.mainImage).url()!}
              alt={blog.title}
              fill
              className="w-full object-cover"
            />
          )}
        </Link>
      </div>

      <div className="w-full max-w-[540px]">
        <a
          href={`/category/${blog.category}`}
          className="inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-blue"
        >
          {blog.category}
        </a>

        <h4 className="mb-4 mt-3.5">
          <Link
            href={postDetailsLink}
            className="group text-xl font-bold text-dark sm:text-2xl xl:text-custom-4xl"
          >
            <span className="bg-gradient-to-r from-primary/40 to-primary/30 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {blog.title}
            </span>
          </Link>
        </h4>
        <p>{blog.metaDescription}</p>

        <div className="mt-4.5 flex items-center gap-2.5">
          <p>
            {" "}
            {blog.publishedAt &&
              new Date(blog.publishedAt)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
          </p>

          <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>

          <p>1 min read</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

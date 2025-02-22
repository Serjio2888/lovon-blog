import React from "react";
import SingleBlog from "@/components/Common/SingleBlog";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getPostsByAuthorSlug, getAuthorBySlug } from "@/sanity/sanity-utils";
import { imageBuilder } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { integrations } from "../../../../../integrations.config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const author = integrations?.isSanityEnabled
    ? await getAuthorBySlug(slug)
    : null;
  const siteURL = process.env.SITE_URL;

  if (author) {
    return {
      title: `${
        author.name || "Author Page"
      } | NextBlog - Next.js Blog Template`,
      description: author.description,
      author: "NextBlog",

      robots: {
        index: false,
        follow: false,
        nocache: true,
      },

      openGraph: {
        title: `${author.name} | NextBlog`,
        description: author.description,
        url: `${siteURL}/author/${slug}`,
        siteName: "NextBlog",
        images: [
          {
            url: imageBuilder(author.image).url(),
            width: 343,
            height: 343,
            alt: author?.name,
          },
        ],
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: `${author.name} | NextBlog`,
        description: `${author.description?.slice(0, 136)}...`,
        creator: "@NextBlog",
        site: "@NextBlog",
        images: [imageBuilder(author.image).url()],
        url: `${siteURL}/author/${slug}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;
  const posts: Blog[] = integrations?.isSanityEnabled
    ? await getPostsByAuthorSlug(slug)
    : [];
  const author = integrations?.isSanityEnabled
    ? await getAuthorBySlug(slug)
    : null;

  return (
    <>
      <section className="pb-17.5 pt-31.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto flex h-35 w-full max-w-[140px] items-center justify-center rounded-full border border-gray-3">
            <div className="h-25 w-full max-w-[100px] overflow-hidden rounded-full">
              {author && (
                <Image
                  src={imageBuilder(author.image).url() as string}
                  alt={author.name}
                  width={100}
                  height={100}
                />
              )}
            </div>
          </div>

          <div className="mx-auto mb-15 mt-5 w-full max-w-[770px] text-center">
            <h1 className="mb-4 text-heading-6 font-bold text-dark lg:text-heading-4">
              {author && author.name}
            </h1>
            <div>
              {author &&
                author.bio.map((block: any) => (
                  <p key={block._key}>
                    {block.children.map((child: any) => child.text).join(" ")}
                  </p>
                ))}
            </div>
          </div>

          <div
            className={`grid grid-cols-1 gap-x-7.5 gap-y-11 ${
              posts.length > 0 ? "sm:grid-cols-2 lg:grid-cols-3" : ""
            }`}
          >
            {posts.length > 0 ? (
              posts.map((blog, key) => <SingleBlog post={blog} key={key} />)
            ) : (
              <div className="mb-15 text-center">
                <div className=" mb-15 bg-gradient-to-r from-[#fff] via-[#D1D5DB] to-[#fff] p-[1px]"></div>

                <Image
                  src="/images/icons/no-posts.svg"
                  alt="empty"
                  width={176}
                  height={194}
                  className="mx-auto"
                />

                <h3 className="pb-3.5 text-heading-5 font-bold text-dark">
                  No posts found
                </h3>
                <p className="pb-6">
                  No posts found here, Please add some post first
                </p>

                <Link
                  aria-label="link to sanity dashboard"
                  href="/admin"
                  className="inline-block rounded-md bg-dark px-8.5 py-3 text-lg font-medium text-white hover:opacity-90"
                >
                  Add Some Posts
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
};

export default AuthorPage;

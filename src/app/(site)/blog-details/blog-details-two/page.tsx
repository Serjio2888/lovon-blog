import {
  getPost,
  getPrevAndNextPost,
  imageBuilder,
} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "@/components/Common/SocialShare";
import { integrations, messages } from "../../../../../integrations.config";
import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import { Blog } from "@/types/blog";

export async function generateMetadata() {
  const slug =
    "traveller-visiting-ice-cave-with-amazing-eye-catching-view-with-nature";
  const post = integrations?.isSanityEnabled ? await getPost(slug) : null;
  const siteURL = process.env.SITE_URL;

  if (post) {
    return {
      title: `${
        post.title || "Single Post Page"
      } | NextBlog - Next.js Blog Template`,
      description: `${post.metaDescription?.slice(0, 136)}...`,
      author: "NextBlog",

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        title: `${post.title} | NextBlog`,
        description: post.metaDescription,
        url: `${siteURL}/posts/${post?.slug?.current}`,
        siteName: "NextBlog",
        images: [
          {
            url: imageBuilder(post.mainImage).url(),
            width: 1800,
            height: 1600,
            alt: post.title,
          },
        ],
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: `${post.title} | NextBlog`,
        description: `${post.metaDescription?.slice(0, 136)}...`,
        creator: "@NextBlog",
        site: "@NextBlog",
        images: [imageBuilder(post?.mainImage).url()],
        url: `${siteURL}/blog/${post?.slug?.current}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

const BlogDetailsTwo = async () => {
  const slug =
    "traveller-visiting-ice-cave-with-amazing-eye-catching-view-with-nature";
  const post = integrations?.isSanityEnabled ? await getPost(slug) : null;
  const author = post && post.author;

  const posts = integrations?.isSanityEnabled
    ? await getPrevAndNextPost(slug)
    : null;

  const siteUrl = process.env.SITE_URL;
  const url = `${siteUrl}/blog/${post?.slug?.current}`;

  return (
    <>
      <main>
        <section className="pb-17.5 pt-31.5">
          <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
            {integrations?.isSanityEnabled ? (
              <div className="mx-auto max-w-[770px]">
                <h1 className="mb-6 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
                  {post?.title}
                </h1>

                <div className="mt-7.5 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/author/${author?.slug.current}`}
                      className="flex h-12.5 w-12.5 overflow-hidden rounded-full"
                    >
                      {author?.image && (
                        <Image
                          src={imageBuilder(author.image).url()!}
                          alt={author.name}
                          width={50}
                          height={50}
                        />
                      )}
                    </Link>

                    <div>
                      <p className="text-custom-lg font-medium text-dark">
                        <Link href={`/author/${author?.slug.current}`}>
                          {author?.name}
                        </Link>
                      </p>
                      <div className="flex gap-5 align-bottom">
                        <div className="flex items-center gap-1.5">
                          <p>
                            {post?.publishedAt &&
                              new Date(post.publishedAt)
                                .toDateString()
                                .split(" ")
                                .slice(1)
                                .join(" ")}
                          </p>
                          <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                          <p>1 min read</p>
                        </div>
                        <Link
                          href={`/category/${post?.category}`}
                          className="mb-1 inline-flex rounded-full bg-green/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-green-dark"
                        >
                          {post?.category}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <SocialShare url={url} />
                </div>
              </div>
            ) : (
              <div>{messages?.sanity}</div>
            )}

            {post?.mainImage && (
              <Image
                src={imageBuilder(post.mainImage).url()!}
                alt={post.title}
                className="my-11 rounded-lg"
                width={1030}
                height={550}
              />
            )}

            {integrations?.isSanityEnabled && (
              <div className="mx-auto max-w-[770px]">
                <div className="blog-details blog-details-two">
                  <RenderBodyContent post={post as Blog} />
                </div>

                {/* <!-- Author Details --> */}
                <div className="relative z-20 mt-10 overflow-hidden rounded-[10px] px-4 py-5 sm:px-11 sm:py-10">
                  {/* <!-- BG Shapes Start --> */}
                  <div>
                    <div className="absolute bottom-0 left-0 z-1 h-full w-full rounded-[10px] bg-gray"></div>
                    <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-[10px]">
                      <Image
                        className="absolute bottom-0"
                        src="/images/blog/blog-bg.svg"
                        alt="shape"
                        width={770}
                        height={201}
                      />
                    </div>
                  </div>
                  {/* <!-- BG Shapes End --> */}

                  <div className="relative z-30 flex flex-col gap-7.5 sm:flex-row">
                    <Link
                      href={`/author/${author?.slug.current}`}
                      className="h-[97px] w-full max-w-[97px] overflow-hidden rounded-full border-[6px] border-white shadow-1"
                    >
                      {author?.image && (
                        <Image
                          src={imageBuilder(author.image).url()!}
                          alt={author.name}
                          width={97}
                          height={97}
                        />
                      )}
                    </Link>

                    <div>
                      <h4 className="mb-3 text-custom-lg font-medium text-dark">
                        <Link href={`/author/${author?.slug.current}`}>
                          Adrio Devid
                        </Link>
                      </h4>
                      <p>
                        Breakfast procuring no end happiness allowance assurance
                        frank. Met simplicity nor difficulty unreserved who.
                      </p>
                      <Link
                        href={`/author/${author?.slug.current}`}
                        className="mt-4 flex text-custom-sm text-primary"
                      >
                        View profile
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <!-- buttns --> */}
                <div className="mt-10 flex rounded-md border border-gray-3">
                  <Link
                    href={`${
                      posts && posts?.prevPost !== null
                        ? `/posts/${posts?.prevPost?.slug.current}`
                        : "#/"
                    }`}
                    className="group w-1/2 rounded-l-md border-r border-gray-3 p-4 text-left duration-200 ease-in hover:bg-gray sm:p-7.5"
                  >
                    <span className="flex items-center gap-4 group-hover:text-primary">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 11.175H4.98748L11.3625 4.6875C11.7 4.35 11.7 3.825 11.3625 3.4875C11.025 3.15 10.5 3.15 10.1625 3.4875L2.39998 11.3625C2.06248 11.7 2.06248 12.225 2.39998 12.5625L10.1625 20.4375C10.3125 20.5875 10.5375 20.7 10.7625 20.7C10.9875 20.7 11.175 20.625 11.3625 20.475C11.7 20.1375 11.7 19.6125 11.3625 19.275L5.02498 12.8625H21C21.45 12.8625 21.825 12.4875 21.825 12.0375C21.825 11.55 21.45 11.175 21 11.175Z"
                          fill=""
                        />
                      </svg>
                      PREVIOUS POST
                    </span>
                    <p className="mt-4 hidden text-custom-sm text-body sm:block">
                      {posts?.prevPost !== null
                        ? posts?.prevPost?.title
                        : "No posts available"}
                    </p>
                  </Link>

                  <Link
                    href={`${
                      posts?.nextPost !== null
                        ? `/posts/${posts?.nextPost?.slug.current}`
                        : "#/"
                    }`}
                    className="group w-1/2 rounded-r-md p-4 text-right duration-200 ease-in hover:bg-gray sm:p-7.5"
                  >
                    <span className="flex items-center justify-end gap-4 group-hover:text-primary">
                      NEXT POST
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6 11.4L13.8375 3.52498C13.5 3.18748 12.975 3.18748 12.6375 3.52498C12.3 3.86248 12.3 4.38748 12.6375 4.72498L18.9375 11.1375H3.00005C2.55005 11.1375 2.17505 11.5125 2.17505 11.9625C2.17505 12.4125 2.55005 12.825 3.00005 12.825H19.0125L12.6375 19.3125C12.3 19.65 12.3 20.175 12.6375 20.5125C12.7875 20.6625 13.0125 20.7375 13.2375 20.7375C13.4625 20.7375 13.6875 20.6625 13.8375 20.475L21.6 12.6C21.9375 12.2625 21.9375 11.7375 21.6 11.4Z"
                          fill=""
                        />
                      </svg>
                    </span>
                    <p className="mt-4 hidden text-custom-sm text-body sm:block">
                      {posts?.nextPost !== null
                        ? posts?.nextPost?.title
                        : "No posts available"}
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetailsTwo;

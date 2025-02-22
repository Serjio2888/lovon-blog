import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import { getPost, getPosts, imageBuilder } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import SocialShare from "@/components/Common/SocialShare";
import { integrations, messages } from "../../../../../integrations.config";

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

const BlogDetailsThree = async () => {
  const slug =
    "traveller-visiting-ice-cave-with-amazing-eye-catching-view-with-nature";
  const post = integrations?.isSanityEnabled ? await getPost(slug) : null;
  const posts: Blog[] = integrations?.isSanityEnabled ? await getPosts() : [];
  const author = post && post.author;
  const categories =
    post && Array.from(new Set(posts.map((post) => post.category)));
  const siteURL = process.env.SITE_URL;

  return (
    <>
      <main>
        <section className="pb-17.5 pt-34">
          <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
            {integrations?.isSanityEnabled ? (
              <div className="flex flex-wrap gap-7.5">
                {/* <!-- Blog Details Start --> */}
                <div className="w-full xl:max-w-[770px]">
                  <div className="mb-10 h-[400px]">
                    {post?.mainImage && (
                      <Image
                        src={imageBuilder(post.mainImage).url()!}
                        alt={post.title}
                        width={770}
                        height={400}
                        className="h-full w-full rounded-lg object-cover "
                      />
                    )}
                  </div>

                  <h1 className="mb-5.5 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
                    {post?.title}
                  </h1>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href={`/author/${author?.slug.current}`}
                      className="flex h-8.5 w-8.5 overflow-hidden rounded-full"
                    >
                      {author?.image && (
                        <Image
                          src={imageBuilder(author.image).url()!}
                          width={34}
                          height={34}
                          alt={author.name}
                        />
                      )}
                    </Link>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <p className="text-custom-sm">
                          <Link href={`/author/${author?.slug.current}`}>
                            {author?.name}
                          </Link>
                        </p>
                        <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-custom-sm">
                          {post?.publishedAt &&
                            new Date(post.publishedAt)
                              .toDateString()
                              .split(" ")
                              .slice(1)
                              .join(" ")}
                        </p>
                        <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                        <p className="text-custom-sm">12 min read</p>
                      </div>

                      <a
                        href={`/category/${post?.category}`}
                        className="inline-flex rounded-full bg-teal/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-teal-dark"
                      >
                        {post?.category}
                      </a>
                    </div>
                  </div>

                  <div className="blog-details blog-details-three mt-9">
                    <RenderBodyContent post={post as any} />
                  </div>

                  <div className="mb-10 mt-15 flex flex-wrap items-center justify-between gap-y-2">
                    {post?.tags && (
                      <div>
                        Tags:{" "}
                        {post?.tags?.map((tag: any) => (
                          <Link
                            key={tag}
                            href={`/tags/${tag}`}
                            className="pr-2 font-medium hover:text-primary"
                          >
                            #{tag}
                          </Link>
                        ))}
                      </div>
                    )}
                    <SocialShare
                      url={`${siteURL}/blog/${post?.slug.current}`}
                    />
                  </div>

                  <div className="mt-12.5 flex flex-wrap gap-8">
                    <Link
                      href={`/author/${author?.slug.current}`}
                      className="flex h-30 w-full max-w-30 overflow-hidden rounded-full"
                    >
                      {author?.image && (
                        <Image
                          src={imageBuilder(author.image).url()!}
                          alt={author.name}
                          width={120}
                          height={120}
                        />
                      )}
                    </Link>

                    <div className="max-w-[617px]">
                      <h4 className="mb-3 text-[22px] font-medium leading-7 text-dark">
                        <Link href={`/author/${author?.slug.current}`}>
                          Author: {author?.name}
                        </Link>
                      </h4>
                      <div>
                        {author?.bio &&
                          author.bio.map((block: any) => (
                            <p key={block._key}>
                              {block.children
                                .map((child: any) => child.text)
                                .join(" ")}
                            </p>
                          ))}
                      </div>

                      {/* <!-- Social Links start --> */}
                      <div className="mt-5 flex items-center gap-1.5">
                        <a
                          href="#"
                          aria-label="social icon"
                          className="flex h-7.5 w-7.5 items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-2 hover:text-dark"
                        >
                          <svg
                            className="fill-current"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z"
                              fill=""
                            />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label="social icon"
                          className="flex h-7.5 w-7.5 items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-2 hover:text-dark"
                        >
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            className="fill-current"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.3267 2H15.532L10.714 7.50667L16.382 15H11.944L8.468 10.4553L4.49067 15H2.284L7.43734 9.11L2 2H6.55067L9.69267 6.154L13.3267 2ZM12.5527 13.68H13.7747L5.88667 3.25067H4.57533L12.5527 13.68Z"
                              fill="#5C6A78"
                            />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label="social icon"
                          className="flex h-7.5 w-7.5 items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-2 hover:text-dark"
                        >
                          <svg
                            className="fill-current"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z"
                              fill=""
                            />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label="social icon"
                          className="flex h-7.5 w-7.5 items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-2 hover:text-dark"
                        >
                          <svg
                            className="fill-current"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </div>
                      {/* <!-- Social Links end --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Blog Details End --> */}

                {/* <!-- Blog Sidebar Start --> */}
                <div className="w-full max-w-[370px]">
                  <div className="flex flex-col gap-10">
                    {/* <!-- Recent Post Box Start --> */}
                    <div className="w-full max-w-[370px] rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                      <h4 className="mb-7.5 text-custom-4 font-semibold text-dark">
                        Recent Posts
                      </h4>

                      <div className="flex flex-col gap-7.5">
                        {/* <!-- post item --> */}

                        {posts.slice(0, 3).map((post, key) => (
                          <Link
                            key={key}
                            href={`/posts/${post.slug.current}`}
                            className="group flex gap-6.5"
                          >
                            <div className="relative w-[80px]">
                              {post.mainImage && (
                                <Image
                                  src={imageBuilder(post.mainImage).url()!}
                                  alt={post.title}
                                  fill
                                  className="w-full rounded-full object-cover"
                                />
                              )}
                            </div>

                            <div>
                              <h5 className="mb-1.5 text-sm font-medium text-dark duration-200 ease-in group-hover:text-primary">
                                {post.title.substr(0, 34)} ...
                              </h5>

                              <div className="flex items-center gap-2">
                                <p className="text-custom-xs">{author?.name}</p>
                                <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
                                <p className="text-custom-xs">
                                  {post.publishedAt &&
                                    new Date(post.publishedAt)
                                      .toDateString()
                                      .split(" ")
                                      .slice(1)
                                      .join(" ")}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* <!-- Recent Post Box End --> */}

                    {/* <!-- Explore Topics Box Start --> */}
                    <div className="w-full max-w-[370px] rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                      <h4 className="mb-8 text-custom-4 font-semibold text-dark">
                        Explore Topics
                      </h4>

                      <div className="flex flex-col gap-3">
                        {/* <!-- topics item --> */}

                        {categories &&
                          categories.map((categoryItem, key) => {
                            const categoryPostCount = posts.filter(
                              (post) => post.category === categoryItem,
                            ).length;

                            return (
                              <Link
                                key={key}
                                href={`/category/${post.category}`}
                                className="group flex items-center justify-between gap-2"
                              >
                                <p className="duration-200 ease-in group-hover:text-dark">
                                  {typeof categoryItem === "string" &&
                                    categoryItem}
                                </p>

                                <span className="flex h-8 w-full max-w-[32px] items-center justify-center rounded-full border border-gray-3 text-custom-sm duration-200 ease-in group-hover:border-dark group-hover:bg-dark group-hover:text-white">
                                  {categoryPostCount < 10
                                    ? "0" + categoryPostCount
                                    : categoryPostCount}
                                </span>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                    {/* <!-- Explore Topics Box End --> */}

                    {/* <!-- Newsletter Box Start --> */}
                    <div className="w-full max-w-[370px] rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                      <h4 className="mb-7.5 text-custom-4 font-semibold text-dark">
                        Newsletter
                      </h4>
                      <p className="mb-5.5 text-custom-lg font-medium">
                        Join 70,000 subscribers!
                      </p>

                      <form>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 text-center outline-none placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                        />
                        <button className="mt-4 flex w-full justify-center rounded-md bg-dark px-5 py-3 text-center font-medium text-white transition-all duration-200 hover:opacity-90">
                          Subscribe Now
                        </button>
                      </form>

                      <p className="mt-5 text-center text-custom-sm">
                        By signing up, you agree to our
                        <Link href={"/privacy-policy"} className="text-dark">
                          Privacy Policy
                        </Link>
                      </p>
                    </div>
                    {/* <!-- Newsletter Box End --> */}
                  </div>
                </div>
                {/* <!-- Blog Sidebar End --> */}
              </div>
            ) : (
              <div className="pt-28">{messages.sanity}</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDetailsThree;

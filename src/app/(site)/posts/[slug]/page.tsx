import RenderBodyContent from "@/components/Blog/RenderBodyContent";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getPost, imageBuilder, getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { structuredAlgoliaHtmlData } from "@/libs/crawlIndex";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = await getPost(slug);
  const siteURL = process.env.SITE_URL;

  if (post) {
    return {
      title: `${
        post.title || "Single Post Page"
      } | NextBlog - Next.js Blog Template`,
      description: `${post.metaDescription?.slice(0, 136)}...`,
      author: "NextBlog",
      alternates: {
        canonical: `${siteURL}/posts/${post?.slug?.current}`,
        languages: {
          "en-US": "/en-US",
          "de-DE": "/de-DE",
        },
      },

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

const BlogDetails = async (props: Props) => {
  const params = await props.params;
  const { slug } = params;
  const post: Blog = await getPost(slug);
  const author = post?.author;

  await structuredAlgoliaHtmlData({
    type: "blog",
    title: post?.title || "",
    htmlString: post?.metaDescription || "",
    pageUrl: `${process.env.SITE_URL}/posts/${post?.slug?.current}`,
    imageURL: imageBuilder(post?.mainImage).url()!,
  });

  return (
    <main>
      <section className="pb-17.5 pt-31.5">
        <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
          <div className="mx-auto max-w-[770px] text-center">
            <Link
              href={`/category/${post.category}`}
              className="mb-1 inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-blue "
            >
              {post.category}
            </Link>
            <h1 className="mb-5 text-2xl font-bold text-dark sm:text-4xl lg:text-custom-2">
              {post.title}
            </h1>
            <p className="text-body">{post.metaDescription}</p>

            <div className="mt-7.5 flex items-center justify-center gap-4">
              <div className="flex h-12.5 w-12.5 overflow-hidden rounded-full">
                <Link href={`/author/${author?.slug?.current}`}>
                  {post?.author?.image && (
                    <Image
                      src={imageBuilder(post.author.image).url()!}
                      alt={post.author.name}
                      width={50}
                      height={50}
                    />
                  )}
                </Link>
              </div>

              <div className="text-left">
                <p className="mb-1 text-custom-lg font-medium text-dark">
                  <Link href={`/author/${author?.slug?.current}`}>
                    {post?.author?.name}
                  </Link>
                </p>
                <div className="flex items-center gap-1.5">
                  <p>
                    {post.publishedAt &&
                      new Date(post.publishedAt)
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
          </div>

          {post?.mainImage && (
            <Image
              src={imageBuilder(post.mainImage).url()!}
              alt={post.title}
              className="mb-11 mt-10 rounded-lg"
              width={1030}
              height={550}
            />
          )}

          <div className="mx-auto max-w-[770px]">
            <div className="blog-details blog-details-one">
              <RenderBodyContent post={post} />
            </div>

            {/* <!-- Blog Show More BTN --> */}
            <button className="mx-auto flex justify-center">
              <Link
                href={`/archive`}
                className="mt-10 rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark  hover:text-white"
              >
                View all Posts
              </Link>
            </button>

            {/* <!-- Author Details --> */}
            <div className="mt-12.5 border-t border-gray-3 pb-17.5 pt-10">
              <div className="flex flex-col gap-9 sm:flex-row sm:items-center">
                <div className="flex h-[133px] w-full max-w-[133px] items-center justify-center rounded-full border border-gray-3">
                  <Link
                    href={`/author/${author?.slug?.current}`}
                    className="h-[97px] w-full max-w-[97px] overflow-hidden rounded-full shadow-img"
                  >
                    {author?.image && (
                      <Image
                        src={imageBuilder(author.image).url()!}
                        alt={author.name}
                        width={101}
                        height={101}
                      />
                    )}
                  </Link>
                </div>

                <div>
                  <h4 className="mb-3 text-custom-lg font-medium text-dark">
                    <Link href={`/author/${author?.slug?.current}`}>
                      {author?.name}
                    </Link>
                  </h4>
                  <div>
                    {author?.bio.map((block) => (
                      <p key={block._key}>
                        {block.children.map((child) => child.text).join(" ")}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={`/author/${author?.slug.current}`}
                    className="mt-4 flex text-custom-sm text-primary"
                  >
                    View profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsletterSignup />
      </section>
    </main>
  );
};

export default BlogDetails;

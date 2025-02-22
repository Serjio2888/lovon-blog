import React from "react";
import SingleBlog from "@/components/Common/SingleBlog";
import { getPostsByTag } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { tag } = params;

  const formattedTag =
    tag.charAt(0).toUpperCase() + tag.slice(1);

  if (tag) {
    return {
      title: ` ${formattedTag} | NextBlog - Next.js Blog Template`,
      description: "This is the Tag page for NextBlog",
      author: "NextBlog",

      robots: {
        index: false,
        follow: false,
        nocache: true,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No tag has been found",
    };
  }
}

const TagPage = async (props: Props) => {
  const params = await props.params;
  const { tag } = params;

  const posts: Blog[] = await getPostsByTag(tag);

  return (
    <>
      <main>
        <section className="pb-17.5 pt-34">
          <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
            <div className="mb-15 text-center">
              <h1 className="mb-3.5 text-heading-6 font-bold capitalize text-dark sm:text-heading-4 lg:text-heading-3">
                {tag}
              </h1>
              <p>{posts?.length} Posts</p>
            </div>

            <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((blog, key) => (
                <SingleBlog post={blog} key={key} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TagPage;

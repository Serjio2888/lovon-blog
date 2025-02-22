import React from "react";
import { Metadata } from "next";
import SingleBlog from "@/components/Common/SingleBlog";
import { getPosts } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import { integrations, messages } from "../../../../integrations.config";

export const metadata: Metadata = {
  title: "Archive | NextBlog - Next.js Blog Template",
  description: "This is archive page for NextBlog",
};

const ArchivePage = async () => {
  const posts: Blog[] = integrations?.isSanityEnabled ? await getPosts() : [];

  return (
    <main>
      <section className="pb-17.5 pt-34">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mb-15 text-center">
            <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Archive
            </h1>
            <p>See all posts we have ever written.</p>
          </div>

          {integrations?.isSanityEnabled ? (
            <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((blog, key) => (
                <SingleBlog post={blog} key={key} />
              ))}
            </div>
          ) : (
            <>{messages.sanity}</>
          )}
        </div>
      </section>
    </main>
  );
};

export default ArchivePage;

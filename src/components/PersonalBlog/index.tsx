import React from "react";
import Hero from "./hero";
import BlogItemContainer from "./BlogItemContainer";
import { getPostsByAuthorSlug } from "@/sanity/sanity-utils";
import { integrations, messages } from "../../../integrations.config";

const PersonalBlog = async () => {
  const posts = integrations?.isSanityEnabled
    ? await getPostsByAuthorSlug("ryna-kenter")
    : [];

  const validPosts = posts?.filter(post => post && post.mainImage) ?? [];

  return (
    <>
      {integrations?.isSanityEnabled && posts?.length > 0 && <Hero />}

      <section className="pb-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          {integrations?.isSanityEnabled ? (
            <BlogItemContainer posts={validPosts} />
          ) : (
            <div className="pt-28">{messages.sanity}</div>
          )}
        </div>
      </section>
    </>
  );
};

export default PersonalBlog;

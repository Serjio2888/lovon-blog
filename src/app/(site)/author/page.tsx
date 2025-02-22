import React from "react";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getAuthors } from "@/sanity/sanity-utils";
import SingleAuthor from "@/components/Home/Authors/SingleAuthor";
import { Author } from "@/types/author";

import { Metadata } from "next";
import { integrations, messages } from "../../../../integrations.config";
import author from "@/sanity/schemas/author";

export const metadata: Metadata = {
  title: "Authors Page - Next.js Blog Template",
  description: "This is Authors Blog page for NextBlog",
  // other metaDescription
};

const AuthorsPage = async () => {
  const authors: Author[] = integrations?.isSanityEnabled
    ? await getAuthors()
    : [];

  return (
    <>
      <section className="mx-auto max-w-[1170px] px-4 pb-17.5 pt-31.5 sm:px-8 xl:px-0">
        <div className="mb-15 text-center">
          <h1 className="mb-3.5 text-heading-6 font-bold capitalize text-dark sm:text-heading-4 lg:text-heading-3">
            Author Page
          </h1>
          <p>{author && authors.length} Authors</p>
        </div>

        {!integrations?.isSanityEnabled && (
          <div className="mx-auto max-w-[770px] text-center">
            {messages.sanity}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Author Item --> */}
          {authors &&
            authors.map((author, key) => (
              <SingleAuthor author={author} key={key} />
            ))}
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
};

export default AuthorsPage;

import React from "react";
import { Metadata } from "next";
import Authors from "@/components/Home/Authors";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | NextBlog - Next.js Blog Template",
  description: "This is about page for NextBlog",
};

const AboutPage = () => {
  return (
    <main>
      <section className="overflow-hidden pb-17.5 pt-39">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
            <div className="w-full lg:max-w-[570px]">
              <Image
                src="/images/about/about.png"
                alt="about"
                className="w-full"
                width={570}
                height={400}
              />
            </div>

            <div className="w-full lg:max-w-[490px]">
              <span className="mb-2.5 inline-flex text-xl font-medium text-primary">
                Who we are
              </span>
              <h1 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
                We provide high quality Articles & blogs
              </h1>
              <p>
                Sed ullamcorper dui at risus viverra, nec cursus leo
                ullamcorper. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos congue dui nec dui
                lobortis maximus.
              </p>
              <p className="mt-4.5">
                Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
                auctor orci, eu dictum diam diam nec neque. Pellentesque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Authors />
      <NewsletterSignup />
    </main>
  );
};

export default AboutPage;

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Policy | NextBlog - Next.js Blog Template",
  description: "This is Privacy & Policy page for NextBlog",
  // other metaDescription
};

const PrivacyPolicyPage = () => {
  return (
    <main>
      <section className="pb-17.5 pt-34">
        <div className="mx-auto max-w-[970px] px-4 sm:px-8 xl:px-0">
          <h1 className="text-center text-heading-4 font-bold text-dark sm:text-heading-3 lg:text-heading-2">
            Privacy & Policy
          </h1>

          <div className="mt-10 sm:mt-15">
            <p className="mb-5 text-body">
              As discussed in the introduction post, one of the best things
              about Ghost is just how much you can customize to turn your site
              into something unique. Everything about your layout and design can
              be changed, so you&apos;re not stuck with yet another clone of a
              social just how much you can
              <a
                aria-label="network profile"
                href="#"
                className="text-primary underline"
              >
                network profile.
              </a>
            </p>

            <p className="mb-5 text-body">
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos congue dui nec dui lobortis
              maximus.
            </p>

            <p className="mb-5 text-body">
              Curabitur pretium, libero vitae pharetra rhoncus, tellus urna
              auctor orci, eu dictum diam diam nec neque. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Fusce congue dui nec dui lobortis maximus. Morbi
              bibendum, nisi vel cursus.
            </p>

            <p className="text-body">
              Adipiscing elit. Nulla id quam at justo ullamcorper vulputate.
              Donec mattis aliquam urna, sed placerat dolor volutpat vel.
              Maecenas quis feugiat just how much you can customize consectetur
              adipiscing elit nulla id quam.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mb-6 text-custom-3 font-bold text-dark">
              Consectetur adipiscing elit
            </h2>

            <p className="mb-5 text-body">
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per
              <Link href="#" className="text-primary underline">
                inceptos{" "}
              </Link>
              himenaeos.
            </p>

            <p className="mb-5 text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              quam at justo ullamcorper vulputate. Donec mattis aliquam urna,
              sed placerat dolor volutpat vel. Maecenas posuere sem purus, quis
              feugiat.
            </p>

            <p className="text-body">
              As discussed in the introduction post, one of the best things
              about Ghost is just how much you can customize to turn your site
              into something unique. Everything about your layout and design can
              be changed, so you&apos;re not stuck with yet another clone of a
              social network profile.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mb-6 text-custom-3 font-bold text-dark">
              Donec mattis aliquam urna
            </h2>

            <p className="text-body">
              Sed ullamcorper dui at risus viverra, nec cursus leo ullamcorper.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per cursus himenaeos.
            </p>

            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex gap-2 text-body">
                <span>1.</span>
                <p>
                  <span className="font-semibold text-dark">
                    Sed ullamcorper dui at risus
                  </span>
                  viverra, nec cursus leo ullamcorper nec cursus leo
                  ullamcorper. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per cursus himenaeos.
                </p>
              </li>

              <li className="flex gap-2 text-body">
                <span>2.</span>
                <p>
                  <span className="font-semibold text-dark">
                    Everything about your
                  </span>
                  layout and design can be changed, so you&apos;re not stuck
                  with yet another clone of a social network profile.
                </p>
              </li>

              <li className="flex gap-2 text-body">
                <span>3.</span>
                <p>
                  <span className="font-semibold text-dark">Nulla id quam</span>
                  at justo ullamcorper vulputate. Donec mattis aliquam urna,
                  dolor volutpat vel.
                </p>
              </li>

              <li className="flex gap-2 text-body">
                <span>4.</span>
                <p>
                  <span className="font-semibold text-dark">
                    Sed ullamcorper dui at risus
                  </span>
                  viverra, nec cursus leo ullamcorper nec cursus leo
                  ullamcorper.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;

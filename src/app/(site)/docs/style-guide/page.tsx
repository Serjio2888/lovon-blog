import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Style Guide | NextBlog - Next.js Blog Template",
  description: "This is Style Guide page for NextBlog",
  // other metaDescription
};

const StyleGuide = () => {
  return (
    <main>
      <section className="rounded-lg bg-[#FAFAFC] px-8 pb-17.5 pt-5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h2 className="mb-12.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
            Typography
          </h2>

          <div className="rounded-3xl bg-white px-4 py-7.5 shadow-2 sm:px-7.5 lg:py-12.5 xl:px-15">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div className="w-full max-w-[582px]">
                <span className="mb-4 block text-heading-6 font-semibold text-blue">
                  Free Font
                </span>
                <h2 className="mb-8 text-heading-1 font-black text-dark">
                  Inter
                </h2>
                <h4 className="mb-4 text-heading-6 font-semibold text-dark">
                  5 font weights available
                </h4>
                <p className="mb-7.5 text-custom-lg text-dark-2">
                  “Lorem ipsum dolor sit amet consectetur adipiscing elit at
                  erat consectetur ultricies sapien facilisi euismod duis mauris
                  a sed quam aliquet dui eros sit lacus vitae ut viverra at
                  praesent.”
                </p>
                <a
                  href="https://fonts.google.com/specimen/Inter"
                  className="inline-block rounded-md bg-blue px-8.5 py-4 text-lg font-medium text-white"
                >
                  Download Font
                </a>
              </div>
              <div className="w-full max-w-[381px]">
                <h1 className="text-[290px] font-bold leading-tight text-dark">
                  Aa
                </h1>
              </div>
            </div>
          </div>

          {/* <!-- Heading Style Start --> */}
          <div className="mb-15 mt-10 border-b border-gray-4 pb-6 lg:mt-20">
            <h2 className="text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Special headings
            </h2>
          </div>

          <div className="flex flex-col gap-7.5">
            {/* <!-- Heading Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[170px]">
                <h4 className="mb-6 text-heading-4 font-bold text-dark">
                  Heading H1
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Bold
                </p>
                <p className="text-lg font-medium text-blue">60px / 72px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <h1 className="text-heading-1 font-black text-dark">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                </h1>
              </div>
            </div>

            {/* <!-- Heading Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[180px]">
                <h4 className="mb-6 text-heading-4 font-bold text-dark">
                  Heading H2
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Bold
                </p>
                <p className="text-lg font-medium text-blue">48px / 58px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <h2 className="text-heading-2 font-bold text-dark">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                </h2>
              </div>
            </div>

            {/* <!-- Heading Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[180px]">
                <h4 className="mb-6 text-heading-4 font-bold text-dark">
                  Heading H3
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Bold
                </p>
                <p className="text-lg font-medium text-blue">40px / 48px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <h3 className="text-heading-3 font-bold text-dark">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                </h3>
              </div>
            </div>

            {/* <!-- Heading Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[180px]">
                <h4 className="mb-6 text-heading-4 font-bold text-dark">
                  Heading H4
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Bold
                </p>
                <p className="text-lg font-medium text-blue">30px / 38px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <h4 className="text-heading-4 font-bold text-dark">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                </h4>
              </div>
            </div>

            {/* <!-- Heading Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[180px]">
                <h4 className="mb-6 text-heading-4 font-bold text-dark">
                  Heading H5
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Bold
                </p>
                <p className="text-lg font-medium text-blue">28px / 40px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <h5 className="text-heading-5 font-semibold text-dark">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                </h5>
              </div>
            </div>

            {/* <!-- Heading Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[180px]">
                <h4 className="mb-6 text-heading-4 font-bold text-dark">
                  Heading H6
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Bold
                </p>
                <p className="text-lg font-medium text-blue">24px / 30px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <h6 className="text-heading-6 font-semibold text-dark">
                  Lorem ipsum dolor sit amet, adipiscing elit.
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- Heading Style End --> */}

          {/* <!-- Body Large Style Start --> */}
          <div className="mb-15 mt-10 border-b border-gray-4 pb-6 lg:mt-20">
            <h2 className="text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Body Large Text
            </h2>
          </div>

          <div className="flex flex-col gap-7.5">
            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Large Regular
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Regular
                </p>
                <p className="text-lg font-medium text-blue">18px / 28px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-lg text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>

            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Large Medium
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Regular
                </p>
                <p className="text-lg font-medium text-blue">18px / 28px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-lg font-medium text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>

            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Large Bold
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Regular
                </p>
                <p className="text-lg font-medium text-blue">18px / 28px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-lg font-bold text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Body Large Style End --> */}

          {/* <!-- Body Medium Style Start --> */}
          <div className="mb-15 mt-10 border-b border-gray-4 pb-6 lg:mt-20">
            <h2 className="text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Body Medium Text
            </h2>
          </div>

          <div className="flex flex-col gap-7.5">
            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Medium Regular
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Regular
                </p>
                <p className="text-lg font-medium text-blue">16px / 24px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-base text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>

            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Medium Medium
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Medium
                </p>
                <p className="text-lg font-medium text-blue">16px / 24px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-base font-medium text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>

            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Medium SemiBold
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter SemiBold
                </p>
                <p className="text-lg font-medium text-blue">16px / 24px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-base font-semibold text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Body Medium Style End --> */}

          {/* <!-- Body Small Style Start --> */}
          <div className="mb-15 mt-10 border-b border-gray-4 pb-6 lg:mt-20">
            <h2 className="text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Body Small Text
            </h2>
          </div>

          <div className="flex flex-col gap-7.5">
            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Small Regular
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Regular
                </p>
                <p className="text-lg font-medium text-blue">14px / 22px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-custom-sm text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>

            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Small Medium
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Medium
                </p>
                <p className="text-lg font-medium text-blue">14px / 22px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-custom-sm font-medium text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Body Small Style End --> */}

          {/* <!-- Body Extra Small Style Start --> */}
          <div className="mb-15 mt-10 border-b border-gray-4 pb-6 lg:mt-20">
            <h2 className="text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Body Extra Small Text
            </h2>
          </div>

          <div className="flex flex-col gap-7.5">
            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Extra Small Regular
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Regular
                </p>
                <p className="text-lg font-medium text-blue">12px / 20px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-custom-xs text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>

            {/* <!-- Body Item --> */}
            <div className="flex flex-wrap justify-between gap-8">
              <div className="w-full max-w-[270px]">
                <h4 className="mb-6 text-heading-5 font-semibold text-dark">
                  Body Extra Small Medium
                </h4>
                <p className="mb-2 text-lg font-medium text-dark-3">
                  Inter Medium
                </p>
                <p className="text-lg font-medium text-blue">12px / 20px</p>
              </div>

              <div className="w-full max-w-[805px]">
                <p className="text-custom-xs font-medium text-dark-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  proin ut vitae, felis. Mauris aliquet faucibus iaculis dui
                  vitae ullamcorper ac enim mi pharetra amet.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Body Extra Small Style End --> */}

          {/* <!-- Buttons Style Start --> */}
          <div className="mb-15 mt-10 border-b border-gray-4 pb-6 lg:mt-20">
            <h2 className="text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Buttons
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center rounded-md bg-dark px-5.5 py-2.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-200 lg:ease-linear">
              Subscribe
            </button>

            <button className="rounded-full border px-4.5 py-2.5 font-medium duration-300 ease-in hover:border-dark hover:bg-dark hover:text-white">
              Technology (03)
            </button>

            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-primary px-5 py-3.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-300 lg:ease-linear"
            >
              Subscribe
            </button>

            <button className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-gray-4 px-10 py-3.5 text-dark duration-200 ease-in hover:border-gray-5 hover:bg-gray">
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_709_8846)">
                  <path
                    d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438"
                    fill="#4285F4"
                  />
                  <path
                    d="M11.7245 22C14.755 22 17.2992 21.0221 19.1577 19.3355L15.6156 16.6464C14.6679 17.2944 13.3958 17.7467 11.7245 17.7467C10.3051 17.7385 8.92433 17.2926 7.77814 16.472C6.63195 15.6515 5.77851 14.4981 5.33892 13.1755L5.20737 13.1865L1.74255 15.8142L1.69727 15.9376C2.63043 17.7602 4.06252 19.2925 5.83341 20.3631C7.60429 21.4337 9.64416 22.0005 11.7249 22"
                    fill="#34A853"
                  />
                  <path
                    d="M5.33889 13.1755C5.09338 12.4753 4.96669 11.7404 4.96388 11C4.9684 10.2608 5.09041 9.52685 5.32552 8.8245L5.31927 8.67868L1.81196 6.00867L1.69724 6.06214C0.910039 7.5938 0.5 9.28491 0.5 10.9999C0.5 12.7148 0.910039 14.406 1.69724 15.9376L5.33889 13.1755Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M11.7249 4.25337C13.3333 4.22889 14.8888 4.8159 16.065 5.89121L19.2329 2.86003C17.2011 0.992106 14.5106 -0.0328008 11.7249 3.27798e-05C9.64418 -0.000452376 7.60433 0.566279 5.83345 1.63686C4.06256 2.70743 2.63046 4.23965 1.69727 6.06218L5.32684 8.82455C5.77077 7.50213 6.62703 6.34962 7.77491 5.5295C8.9228 4.70938 10.3044 4.26302 11.7249 4.25337Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_709_8846">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Google
            </button>

            <button className="inline-flex justify-center rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark hover:text-white">
              Browse all Posts
            </button>
          </div>
          {/* <!-- Buttons Style End --> */}
        </div>
      </section>
    </main>
  );
};

export default StyleGuide;

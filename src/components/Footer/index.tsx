import Link from "next/link";
import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-gray-3 py-8">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
          <div>
            <p className="text-custom-sm">
              &copy; {year} NextBlog. All rights reserved
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap items-center gap-2.5">
              <li>
                <Link
                  href="/privacy-policy"
                  className="group flex text-custom-sm leading-none duration-200 ease-in hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Privacy
                  </span>
                </Link>
              </li>
              <li>
                <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="group flex text-custom-sm leading-none duration-200 ease-in hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Terms
                  </span>
                </Link>
              </li>
              <li>
                <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
              </li>
              <li>
                <Link
                  href="/auth/signup"
                  className="group flex text-custom-sm leading-none duration-200 ease-in hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <span className="flex h-[3px] w-[3px] rounded-full bg-dark-2"></span>
              </li>
              <li>
                <Link
                  href="/auth/signup"
                  className="group flex text-custom-sm leading-none duration-200 ease-in hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Contribute
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <p className="text-custom-sm font-medium text-dark">Follow Us:</p>

              {/* <!-- Social Links start --> */}
              <div className="flex items-center gap-1.5">
                <a
                  href="#"
                  aria-label="social media link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-300 lg:ease-linear"
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
                  aria-label="social media link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-300 lg:ease-linear"
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
                  aria-label="social media link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-300 lg:ease-linear"
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
                  aria-label="social media link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-300 lg:ease-linear"
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
      </div>
    </footer>
  );
  {
    /* <!-- ====== Footer Section End --> */
  }
};

export default Footer;

import Link from "next/link";
import React from "react";

const SocialShare = ({ url }: { url: string }) => {
  return (
    <>
      {/* <Link
        href={`https://twitter.com/intent/post?url=${url}`}
        className="border-stroke hover:border-black hover:bg-black dark:border-stroke-dark flex h-10 w-10 items-center justify-center rounded-lg border text-gray-6 duration-200 ease-in hover:text-white"
      >
        <svg
          className="fill-current"
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.15321 0.25L11.522 5.84375L16.5757 0.25H19.6432L12.9445 7.66375L20.8245 17.75H14.652L9.81946 11.6338L4.28821 17.75H1.21946L8.38821 9.8225L0.824463 0.25H7.15321ZM6.22821 1.93375H4.40696L15.5007 15.9738H17.2007L6.22821 1.93375Z" />
        </svg>
      </Link>

      <Link
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        className="border-stroke hover:border-black hover:bg-black dark:border-stroke-dark flex h-10 w-10 items-center justify-center rounded-lg border text-gray-6 duration-200 ease-in hover:text-white"
      >
        <svg
          className="fill-current"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.8245 0.060791C5.30161 0.060791 0.824463 4.53794 0.824463 10.0608C0.824463 15.0521 4.48131 19.1891 9.26198 19.9393V12.9514H6.72289V10.0608H9.26198V7.85767C9.26198 5.35142 10.7549 3.96704 13.0391 3.96704C14.1332 3.96704 15.2776 4.16235 15.2776 4.16235V6.62329H14.0166C12.7744 6.62329 12.387 7.39413 12.387 8.18499V10.0608H15.1604L14.7171 12.9514H12.387V19.9393C17.1676 19.1891 20.8245 15.0521 20.8245 10.0608C20.8245 4.53794 16.3473 0.060791 10.8245 0.060791Z" />
        </svg>
      </Link>

      <Link
        href={`https://linkedin.com/share?url=${url}`}
        className="border-stroke hover:border-black hover:bg-black dark:border-stroke-dark flex h-10 w-10 items-center justify-center rounded-lg border text-gray-6 duration-200 ease-in hover:text-white"
      >
        <svg
          className="fill-current"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.29448 2.00042C4.29411 2.81473 3.80008 3.54751 3.04534 3.85322C2.2906 4.15894 1.42587 3.97654 0.858904 3.39204C0.291934 2.80753 0.135954 1.93764 0.464504 1.19256C0.793064 0.447478 1.54054 -0.0240123 2.35448 0.000417671C3.43555 0.0328677 4.29497 0.918858 4.29448 2.00042ZM4.35448 5.48042H0.354483V18.0004H4.35448V5.48042ZM10.6745 5.48042H6.69448V18.0004H10.6345V11.4304C10.6345 7.77039 15.4045 7.43039 15.4045 11.4304V18.0004H19.3545V10.0704C19.3545 3.90042 12.2945 4.13042 10.6345 7.16039L10.6745 5.48042Z" />
        </svg>
      </Link> */}

      <div className="flex items-center gap-3">
        <p>Share this:</p>

        {/* <!-- Social Links start --> */}
        <div className="flex items-center gap-2">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            aria-label="facebook share"
            className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-[#364E8F] duration-300 ease-in hover:bg-opacity-95"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 6.6779V4.7263C7.7 3.9708 8.32679 3.35835 9.1 3.35835H10.5V1.30642L8.5995 1.17378C6.97865 1.06066 5.6 2.31497 5.6 3.90273V6.6779H3.5V8.72984H5.6V12.8334H7.7V8.72984H9.8L10.5 6.6779H7.7Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            href={`https://twitter.com/intent/post?url=${url}`}
            aria-label="twitter share"
            className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-[#52A2EC] duration-300 ease-in hover:bg-opacity-95"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.44062 12.5562C9.60312 12.5562 12.4031 8.29054 12.4031 4.59366C12.4031 4.50616 12.4031 4.35304 12.3812 4.22179C12.9281 3.82804 13.4094 3.32491 13.7812 2.77804C13.2562 3.01866 12.7313 3.14991 12.1844 3.21554C12.775 2.86554 13.2125 2.31866 13.4094 1.66241C12.8625 1.96866 12.2937 2.20929 11.6156 2.34054C11.0906 1.79366 10.3906 1.44366 9.58125 1.44366C8.02812 1.44366 6.75937 2.71241 6.75937 4.26554C6.75937 4.48429 6.78125 4.70304 6.825 4.92179C4.57188 4.76866 2.51562 3.65304 1.11562 1.96866C0.875 2.40616 0.74375 2.86554 0.74375 3.36866C0.74375 4.35304 1.24687 5.18429 2.0125 5.68741C1.55312 5.66554 1.11563 5.53429 0.74375 5.33741C0.74375 5.35929 0.74375 5.35929 0.74375 5.35929C0.74375 6.69366 1.70625 7.85304 2.975 8.11554C2.73438 8.18116 2.47187 8.20304 2.275 8.20304C2.1 8.20304 1.90312 8.18116 1.75 8.13741C2.12188 9.25304 3.15 10.0624 4.375 10.0843C3.4125 10.828 2.20937 11.2874 0.91875 11.2874C0.65625 11.3312 0.4375 11.2874 0.21875 11.2655C1.4 12.0968 2.86562 12.5562 4.44062 12.5562Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            href={`http://pinterest.com/pin/create/link/?url=${url}`}
            aria-label="pinterest share"
            className="flex h-7.5 w-7.5 items-center justify-center rounded-full bg-[#B1151D] duration-300 ease-in hover:bg-opacity-95"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_693_5532)">
                <path
                  d="M0.393898 7.02197C0.437648 9.05635 1.37828 11.0907 2.97514 12.3157C3.47827 12.6876 4.02514 12.9063 4.59389 13.147C4.35327 11.5938 4.94389 10.0407 5.27202 8.50947C5.31577 8.35635 5.33764 8.18135 5.33764 8.00635C5.33764 7.76572 5.25014 7.5251 5.18452 7.28447C5.11889 6.89072 5.16264 6.4751 5.33764 6.10322C5.57827 5.6001 6.14702 5.20635 6.65014 5.40322C7.10952 5.57822 7.28452 6.19072 7.19702 6.67197C7.10952 7.1751 6.84702 7.6126 6.71577 8.09385C6.56264 8.5751 6.58452 9.16572 6.93452 9.49385C7.26264 9.8001 7.78764 9.82197 8.20327 9.64697C8.81577 9.38447 9.20952 8.77197 9.45014 8.15947C9.88764 7.02197 9.80014 5.57822 8.90326 4.74697C8.53139 4.3751 8.00639 4.13447 7.43764 4.04697C6.47514 3.89385 5.42514 4.17822 4.74702 4.87822C4.06889 5.57822 3.76264 6.6501 4.04702 7.56885C4.13452 7.8751 4.30952 8.18135 4.37514 8.4876C4.44077 8.79385 4.41889 9.1876 4.20014 9.40635C4.17827 9.42822 4.15639 9.4501 4.11264 9.47197C4.06889 9.49385 4.00327 9.4501 3.95952 9.42822C3.54389 9.16572 3.21577 8.7501 3.01889 8.3126C2.40639 6.97822 2.71264 5.31572 3.67514 4.22197C4.63764 3.12822 6.19077 2.60322 7.63452 2.8001C8.99077 2.9751 10.3251 3.78447 10.8939 5.03135C11.2439 5.7751 11.3095 6.62822 11.1783 7.4376C11.047 8.26885 10.7189 9.05635 10.172 9.69072C9.62514 10.3251 8.83764 10.7626 8.00639 10.8063C7.32827 10.8501 6.60639 10.6095 6.25639 10.0407C6.03764 11.222 5.62202 12.3813 5.00952 13.4095C4.98764 13.4532 6.40952 13.7595 6.54077 13.7595C8.15952 13.8907 9.88764 13.2563 11.1564 12.2501C14.6564 9.47197 14.2845 4.15635 10.8283 1.53135C9.03452 0.153224 6.91264 -0.109276 4.81264 0.634475C4.17827 0.853225 3.58764 1.2251 3.04077 1.61885C2.16577 2.2751 1.46577 3.12822 1.0064 4.1126C0.547023 5.00947 0.372023 6.01572 0.393898 7.02197Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_693_5532">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        {/* <!-- Social Links end --> */}
      </div>
    </>
  );
};

export default SocialShare;

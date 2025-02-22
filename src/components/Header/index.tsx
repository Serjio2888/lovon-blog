"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SearchModal from "../Common/SearchModal";
import DropDown from "./DropDown";
import menuData from "./menuData";
import GlobalSearchModal from "../GlobalSearch";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [acDropdownToggler, setAcDropdownToggler] = useState(false);

  const [stickyMenu, setStickyMenu] = useState(false);
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  // hide navigation when clicked outside
  useEffect(() => {
    function handleClickOutside(event: any) {
      const navigationElement = document.querySelector(".navigation");
      if (
        navigationElement &&
        !navigationElement.contains(event.target) &&
        navigationOpen
      ) {
        setNavigationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigationOpen]); // Added navigationOpen as a dependency

  return (
    <>
      <header
        className={` fixed left-0 top-0 z-9999 w-full bg-white py-7 transition-all duration-300 ease-in-out lg:py-0 ${
          stickyMenu && "!py-4 shadow lg:!py-0"
        }`}
      >
        <div className="navigation relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 lg:flex xl:px-0 ">
          <div className="flex w-full items-center justify-between lg:w-3/12">
            <Link href="/">
              <Image
                src="/images/logo/logo.svg"
                width={120}
                height={30}
                alt="Logo"
              />
            </Link>

            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              className="block lg:hidden"
              onClick={() => {
                if (navigationOpen) {
                  setNavigationOpen(false);
                } else {
                  setNavigationOpen(true);
                }
              }}
              aria-label="mobile menu toggler"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-[0] duration-200 ease-in-out ${
                      !navigationOpen && "!w-full delay-300"
                    }`}
                  ></span>

                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-150 duration-200 ease-in-out ${
                      !navigationOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-dark delay-200 duration-200 ease-in-out ${
                      !navigationOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="du-block absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-dark delay-300 duration-200 ease-in-out ${
                      !navigationOpen && "!h-0 delay-[0]"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-dark duration-200 ease-in-out ${
                      !navigationOpen && "dealy-200 !h-0"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}
          </div>

          <div
            className={` invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-9/12 ${
              navigationOpen &&
              `shadow-lgrelative !visible mt-4 !h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5`
            }`}
          >
            {/* <!-- Main Nav Start --> */}
            <nav>
              <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                {menuData.map((menuItem, key) => (
                  <li
                    className={`group relative lg:py-6.5 ${
                      stickyMenu && "lg:!py-5.5"
                    }`}
                    key={key}
                  >
                    {menuItem.submenu ? (
                      <DropDown
                        menu={menuItem}
                        key={key}
                        setNavigationOpen={setNavigationOpen}
                      />
                    ) : (
                      <>
                        <Link
                          onClick={() => setNavigationOpen(false)}
                          href={menuItem.path ? menuItem.path : ""}
                          className="flex items-center justify-between gap-3 hover:text-dark"
                        >
                          {menuItem.title}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* <!-- Main Nav End --> */}

            {/* <!--=== Nav Right Start ===--> */}
            <div className="mt-7 flex flex-col flex-wrap gap-8.5 lg:mt-0 lg:flex-row lg:items-center">
              {/* <!-- Social Links start --> */}
              <div className="items-center gap-1.5 lg:hidden xl:flex">
                <a
                  href="#"
                  aria-label="social link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200"
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
                  aria-label="social link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200"
                >
                  <svg
                    width="19"
                    height="18"
                    className="fill-current"
                    viewBox="0 0 19 18"
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
                  aria-label="social link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200"
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
                  aria-label="social link"
                  className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200"
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

              {/* <!-- Button Links start --> */}
              <div className="flex items-center gap-4.5">
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200 lg:ease-linear"
                  aria-label="search button"
                >
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z"
                      fill=""
                    />
                  </svg>
                </button>

                {typeof session !== "undefined" && (
                  <div className="group relative">
                    {session ? (
                      <>
                        <button
                          onClick={() =>
                            setAcDropdownToggler(!acDropdownToggler)
                          }
                          className="flex rounded-md bg-dark px-5.5 py-2.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-200 lg:ease-linear "
                        >
                          Account
                        </button>
                        <ul
                          className={`dropdown ${
                            acDropdownToggler ? "flex" : "hover:flex"
                          }`}
                        >
                          <li>
                            <Link
                              href={"/account"}
                              className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary ${
                                pathUrl === "/account" &&
                                " bg-gray text-primary"
                              }`}
                            >
                              Account Details
                            </Link>
                          </li>
                          <li>
                            <button
                              aria-label="logout button"
                              onClick={() => signOut()}
                              className={`flex w-full cursor-pointer rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary`}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </>
                    ) : (
                      <Link
                        href={"/auth/signin"}
                        className="flex rounded-md bg-dark px-5.5 py-2.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-200 lg:ease-linear"
                      >
                        Sign in
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {searchModalOpen && (
        // <SearchModal
        //   isModalOpen={searchModalOpen}
        //   setIsModalOpen={setSearchModalOpen}
        // />
        <GlobalSearchModal
          searchModalOpen={searchModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      )}
    </>
  );
};

export default Header;

import { Menu } from "@/types/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DropDown = ({
  menu,
  setNavigationOpen,
}: {
  menu: Menu;
  setNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  return (
    <>
      {menu.title === "Home" ? (
        <Link
          onClick={() => setDropdownToggler(!dropdownToggler)}
          href={menu?.path!}
          className="flex gap-4 items-center hover:text-dark"
        >
          {menu.title}
          <svg
            className="h-3 w-3 cursor-pointer fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </Link>
      ) : (
        <button
          onClick={() => {
            if (!dropdownToggler) {
              setDropdownToggler(true);
            } else {
              setDropdownToggler(false);
            }
            console.log("test ");
          }}
          className="flex items-center justify-between gap-3 hover:text-dark"
        >
          {menu.title}
          <svg
            className="h-3 w-3 cursor-pointer fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      )}

      <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
        {menu?.submenu &&
          menu?.submenu.map((item, key) => (
            <li key={key}>
              <Link
                onClick={() => {
                  setNavigationOpen(false);
                  setDropdownToggler(false);
                }}
                href={item.path!}
                className={`flex rounded-md px-4 py-2 text-sm hover:bg-gray hover:text-primary ${
                  pathUrl === item.path && " bg-gray text-primary"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default DropDown;

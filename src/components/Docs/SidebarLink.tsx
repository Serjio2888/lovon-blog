"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const pathUrl = usePathname();

  return (
    <>
      <li className="block">
        <Link
          href={`/docs/${post?.slug}`}
          className={`flex w-full rounded-md px-3 py-2.5 font-medium duration-300 hover:bg-gray-2 hover:text-dark ${
            pathUrl === `/docs/${post?.slug}`
              ? "bg-gray-2 text-dark"
              : "text-dark-3"
          }`}
        >
          {post?.title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;

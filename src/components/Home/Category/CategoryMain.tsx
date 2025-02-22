"use client";
import React, { useState } from "react";
import SingleBlog from "@/components/Common/SingleBlog";
import { Blog } from "@/types/blog";
import Link from "next/link";

const CategoryMain = ({ posts }: { posts: Blog[] }) => {
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const [activeCategory, setActiveCategory] = useState("All"); // Default to "All" category
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div>
      {/* <!-- Blog Categories Tab Start --> */}
      <div className="mb-15 flex flex-wrap items-center justify-center gap-4">
        {categories.map((categoryItem, key) => {
          const categoryPostCount =
            categoryItem === "All"
              ? posts.length
              : posts.filter((post) => post.category === categoryItem).length;

          return (
            <button
              onClick={() => setActiveCategory(categoryItem)}
              key={key}
              className={`rounded-full border px-4.5 py-2.5 font-medium capitalize duration-200 ease-in hover:border-dark hover:bg-dark hover:text-white ${
                activeCategory === categoryItem
                  ? "border-dark bg-dark text-white"
                  : "border-gray-3 bg-gray text-dark"
              }`}
            >
              {categoryItem} (
              {categoryPostCount < 10
                ? "0" + categoryPostCount
                : categoryPostCount}
              )
            </button>
          );
        })}
      </div>
      {/* <!-- Blog Categories Tab End --> */}

      {/* <!-- Blog Categories Content Start --> */}
      <div>
        <div>
          <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- blog item --> */}

            {filteredPosts.slice(0, 6).map((post, key) => (
              <SingleBlog post={post} key={key} />
            ))}
          </div>
        </div>
        {/* <!-- Technology content end --> */}
      </div>
      {/* <!-- Blog Categories Content End --> */}

      {/* <!-- Blog Show More BTN --> */}
      <button className="mx-auto flex justify-center ">
        <Link
          href={"/archive"}
          className="mt-12.5 rounded-md border border-dark px-7.5 py-3 font-medium text-dark duration-200 ease-in hover:bg-dark  hover:text-white lg:mt-17.5"
        >
          Browse all Posts
        </Link>
      </button>
    </div>
  );
};

export default CategoryMain;

import Search from "@/components/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Posts - Next.js Blog Template",
  description: "This is Search page for NextBlog",
  // other metaDescription
};

const SearchPage = () => {
  return (
    <main>
      <Search />
    </main>
  );
};

export default SearchPage;

import SectionHeader from "@/components/Common/SectionHeader";
import { getPosts } from "@/sanity/sanity-utils";
import CategoryMain from "./CategoryMain";
import { integrations } from "../../../../integrations.config";

const Category = async () => {
  const posts = integrations?.isSanityEnabled ? await getPosts() : [];

  return (
    <>
      <section className="pb-15 pt-20 lg:pt-25">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <SectionHeader
            title=" Browse by Category"
            description="Select a category to see more related content"
          />

          <CategoryMain posts={posts} />
        </div>
      </section>
    </>
  );
};

export default Category;

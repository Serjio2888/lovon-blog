import Image from "next/image";
import { getPosts } from "@/sanity/sanity-utils";
import FirstBlog from "./FirstBlog";
import SingleBlog from "./SingleBlog";
import { Blog } from "@/types/blog";
import { integrations, messages } from "../../../../integrations.config";

const Hero = async () => {
  const posts: Blog[] = integrations?.isSanityEnabled ? await getPosts() : [];
  const firstPost = posts.length > 0 && posts[0];
  const restOfThePosts = posts.length > 0 && posts.slice(1, 3);

  return (
    // <!-- ===== Hero Section Start ===== -->
    <section
      id="home"
      className="relative z-10 overflow-hidden rounded-b-[50px] pb-15 pt-34"
    >
      {/* <!-- Hero BG Shapes Start --> */}
      <div>
        <div className="absolute bottom-0 left-0 h-full w-full rounded-b-[50px] bg-gray"></div>
        <div className="absolute bottom-0 left-0 h-full w-full rounded-b-[50px]">
          <Image
            src="/images/hero/hero-bg.svg"
            alt="hero"
            width={1920}
            height={779}
          />
        </div>
      </div>
      {/* <!-- Hero BG Shapes End --> */}

      {/* <!-- Hero Content Start --> */}
      <div className="relative z-1 mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">

        {
          !integrations?.isSanityEnabled && (
            <div>
              {messages.sanity}
            </div>
          )
        }

        <div className="flex flex-wrap gap-x-7.5 gap-y-9">
          {/* <!-- Hero item --> */}

          {firstPost && <FirstBlog blog={firstPost} />}

          {/* <!-- Hero item --> */}
          {restOfThePosts &&
            restOfThePosts.map((post, key) => (
              <SingleBlog blog={post} key={key} />
            ))}
        </div>
      </div>
      {/* <!-- Hero Content End --> */}
    </section>
  );
};

export default Hero;

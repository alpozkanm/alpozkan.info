import { allContents } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Posts from "~/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const filteredProjects = allContents.filter((post) => {
    return post.image.includes("1_");
  });
  const posts = filteredProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-7xl text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Blog
        </h1>
      </header>

      <section className="mx-auto mb-16 max-w-7xl sm:mb-24 lg:mb-32">
        <Posts posts={posts} />
      </section>
    </>
  );
}

import Link from "next/link";
import { allContents } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Hello from "~/components/hello";
import Posts from "~/components/posts";
import NewsletterSignup from "~/components/newsletter-signup";

export default function Home() {
  const filteredProjects = allContents.filter((post) => {
    return post.image.includes("1_");
  });
  const posts = filteredProjects
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);

  return (
    <>
      <>
        <section className="my-32 sm:my-12 md:my-8 lg:my-16 2xs:my-4 xs:my-4">
          <Hello />
        </section>
        <div className="my-4 sm:my-4 lg:my-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="my-8 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Recent posts
            </h2>
            <Posts posts={posts} />
            <p className="my-8 md:text-lg lg:text-xl">
              <Link
                className="font-bold text-gray-100 hover:text-white"
                href="/blog"
              >
                See all posts
              </Link>
            </p>
          </div>
        </div>

        <section className="my-8 sm:my-12 lg:my-8" id="newsletter-signup">
          <NewsletterSignup />
        </section>
      </>
    </>
  );
}

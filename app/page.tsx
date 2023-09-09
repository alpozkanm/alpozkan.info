import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Aloha from "~/components/aloha";
import Posts from "~/components/posts";
import NewsletterSignup from "~/components/newsletter-signup";

export const metadata = {
  title: "Aloha",
  description:
    "I'm a Product Executive living in Istanbul. I'm passionate about user experience and privacy.",
};

export default function Home() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);

  return (
    <>
      <section className="my-8 sm:my-12 lg:my-8">
        <Aloha />
      </section>
      <div className="my-8 sm:my-48 lg:my-64">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="my-8 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Recent posts
          </h2>
          <Posts posts={posts} />
          <p className="my-8 md:text-lg lg:text-xl">
            <Link
              className="font-bold text-gray-100 hover:text-white"
              href="/blog"
            >
              See all posts <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </div>

      <section className="my-8 sm:my-12 lg:my-8" id="newsletter-signup">
        <NewsletterSignup />
      </section>
    </>
  );
}

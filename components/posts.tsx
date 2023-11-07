import { Content } from "~/.contentlayer/generated";
import Date from "~/components/date";
import Image from "next/image";

export default function Posts({ posts }: { posts: Content[] }) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
      {posts.map((post) => (
        <article key={post.slug}>
          <div className="text-sm text-gray-500">
            <Date dateString={post.date} />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 text-sm text-gray-500 md:order-1">
              <h3 className="mt-3 text-xl font-bold leading-6 text-gray-100">
                <a href={`https://medium.com/@alpozkanm/${post.slug}`}>
                  {post.title}
                </a>
              </h3>
              <p className="mt-3 hidden sm:block">{post.description}</p>
            </div>
            {post.image && (
              <div className="relative order-1 h-[112px] w-[112px] md:order-2 overflow-hidden">
                <Image src={post.image} alt={post.title} sizes="112px" fill style={{ objectFit: 'contain', objectPosition: 'top',}} />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

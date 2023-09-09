import { Post } from "~/.contentlayer/generated";
import Date from "~/components/date";
import Image from "next/image";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
      {posts.map((post) => (
        <article key={post.slug}>
          <div className="text-sm text-gray-500">
            <Date dateString={post.date} />
          </div>
          <h3 className="mt-3 text-xl font-bold leading-6 text-gray-100">
            <a href={`https://medium.com/@alpozkanm/${post.slug}`}>
              {post.title}
            </a>
          </h3>
          { post.image && (
              <div style={{ width: '200px', position: 'relative', height: '100px' }}>
                <Image fill={true} src={post.image} alt={post.title}/>
              </div>  
            )}
          <p className="mt-3">{post.description}</p>
        </article>
      ))}
    </div>
  );
}

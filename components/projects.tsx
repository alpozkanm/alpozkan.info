import { Content } from "contentlayer/generated";
import Date from "~/components/date";
import Image from "next/image";

export default function Projects({ projects }: { projects: Content[] }) {
  return (
    <div className="mx-auto flex flex-col gap-x-8 gap-y-16">
      {projects.map((project) => (
        <article key={project.slug}>
          <div className="text-sm text-gray-500">
            <Date dateString={project.date} />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 text-sm text-gray-500 md:order-1">
              <h3 className="mt-3 text-xl font-bold leading-6 text-gray-100">
                {project.title}
              </h3>
              <p className="mt-3 hidden sm:block">{project.description}</p>
            </div>
            {project.image && (
              <div className="relative order-1 h-[112px] w-[112px] md:order-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  sizes="112px"
                  fill
                  style={{ objectFit: "contain", objectPosition: "top" }}
                />
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

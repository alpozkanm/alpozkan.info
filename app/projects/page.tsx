import { allContents } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Projects from "~/components/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
};

export default function ProjectPage() {
  const filteredProjects = allContents.filter((project) => {
    return project.image.includes("projects_img");
  });
  const projects = filteredProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return (
    <>
      <header>
        <h1 className="mx-auto mb-8 max-w-7xl text-4xl font-bold text-gray-100 md:mb-10 md:mt-32 md:text-5xl lg:mb-12 lg:text-[3.5rem]">
          Projects
        </h1>
      </header>

      <section className="mx-auto mb-16 flex max-w-7xl sm:mb-24 lg:mb-32">
        <Projects projects={projects} />
      </section>
    </>
  );
}

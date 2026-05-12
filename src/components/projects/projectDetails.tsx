// components/projects/project-detail.tsx

import { Project } from "@/types";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-[#1A1A1A]">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm tracking-[0.2em] text-[#6B6B6B] uppercase">
          {project.category}
        </p>

        <h1 className="mt-6 font-serif text-6xl leading-none tracking-[-0.04em]">
          {project.name}
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6B6B6B]">
          {project.tagline}
        </p>

        <div className="mt-16 grid gap-16 border-t border-[#E8E2DB] pt-16">
          <div>
            <h2 className="mb-4 text-sm tracking-[0.2em] text-[#6B6B6B] uppercase">
              Problem
            </h2>

            <p className="max-w-3xl text-lg leading-9">
              {project.problemStatement}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm tracking-[0.2em] text-[#6B6B6B] uppercase">
              Motivation
            </h2>

            <p className="max-w-3xl text-lg leading-9">
              {project.motivation}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm tracking-[0.2em] text-[#6B6B6B] uppercase">
              Outcome
            </h2>

            <p className="max-w-3xl text-lg leading-9">
              {project.whatItAchieves}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-sm tracking-[0.2em] text-[#6B6B6B] uppercase">
              Learnings
            </h2>

            <ul className="space-y-4">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="border-l border-[#D8D0C8] pl-4 text-lg text-[#6B6B6B]"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm tracking-[0.2em] text-[#6B6B6B] uppercase">
              Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-[#E8E2DB] bg-white px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
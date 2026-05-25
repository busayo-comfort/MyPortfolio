// app/page.tsx

import Link from "next/link";
import { highlightedProject, otherProjects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-[#1A1A1A]">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col md:flex-row border-b border-[#E8E2DB]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="mb-10 text-[0.78rem] tracking-[0.22em] text-[#6B6B6B]">
            FULL-STACK DEVELOPER · IBADAN, NIGERIA
          </p>

          <div className="max-w-4xl">
            <h1 className="font-serif text-[2.3rem] leading-[1.04] tracking-tighter[-0.05em] md:text-[3.2rem]">
              Building systems for markets that actually matter.
            </h1>

            <p className="mt-10 max-w-2xl text-[1.1rem] leading-8[2rem] text-[#6B6B6B]">
              I architect full-stack products end-to-end — from marketplace
              infrastructure to real-time systems. Currently building toward
              construction technology for Africa.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-sm border border-[#E8E2DB] bg-white px-7 py-3 text-sm text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="rounded-sm border border-[#E8E2DB] px-7 py-3 text-sm text-[#6B6B6B] transition hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        <div className=" hidden sm:block w-[70%] h-[80vh]  side-img">
          <img className="w-full h-full object-contain"  src="/personal-image.png" alt="Personal Image" />

        </div>
      </section>

      {/* FEATURED PROJECT */}
      {highlightedProject && (
        <section className="border-b border-[#E8E2DB]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
            <p className="mb-10 text-[0.78rem] tracking-[0.22em] text-[#6B6B6B]">
              FEATURED PROJECT
            </p>

            <div className="grid gap-14 border border-[#E8E2DB] bg-white p-8 md:grid-cols-2 md:p-12">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#F5F0EB] px-4 py-2 text-[0.72rem] tracking-[0.15em] text-[#8B6B43]">
                  <span className="h-2 w-2 rounded-full bg-[#B8860B]" />
                  {highlightedProject.status.toUpperCase()}
                </span>

                <h2 className="mt-8 font-serif text-5xl tracking-[-0.04em]">
                  {highlightedProject.name}
                </h2>

                <p className="mt-6 max-w-md text-lg leading-8 text-[#6B6B6B]">
                  {highlightedProject.tagline}
                </p>

                <blockquote className="mt-8 border-l border-[#D8D0C8] pl-5 italic leading-8 text-[#555555]">
                  {highlightedProject.problemStatement}
                </blockquote>

                <div className="mt-8 flex flex-wrap gap-3">
                  {highlightedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[#E8E2DB] bg-[#F5F0EB] px-4 py-2 text-sm text-[#6B6B6B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${highlightedProject.slug}`}
                  className="mt-10 inline-flex items-center gap-2 border-b border-[#1A1A1A] pb-1 text-lg"
                >
                  View Project →
                </Link>
              </div>

              {/* PREVIEW */}
              <div className="hidden sm:flex items-center justify-center">
                <div className="flex h-[80] w-full max-w-[105] items-center justify-center bg-[#F5F0EB]">
                  <div className="text-center">
                    <p className="font-serif text-6xl font-bold text-[#D0C4B8]">
                      CS
                    </p>

                    <p className="mt-4 text-[0.75rem] tracking-[0.18em] text-[#C3B7AA]">
                      PROJECT PREVIEW
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROJECT GRID */}
      <section id="work">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="mb-10 text-[0.78rem] tracking-[0.22em] text-[#6B6B6B]">
            ALL WORK
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group border border-[#E8E2DB] bg-white p-5 transition hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[0.72rem] tracking-[0.18em] text-[#6B6B6B]">
                    {project.category.toUpperCase()}
                  </span>

                  <span className="text-sm text-[#B8B0A8]">
                    {project.status}
                  </span>
                </div>

                {/* THUMBNAIL */}
                <div className="flex h-[150] items-center justify-center bg-[#F5F0EB]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-serif text-4xl font-semibold text-[#CFC3B7]">
                      {project.name}
                    </span>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-4xl tracking-[-0.04em]">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-[#6B6B6B]">
                    {project.problemStatement}
                  </p>

                  <div className="mt-10 flex justify-end text-2xl text-[#B8B0A8] transition group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
     
    </main>
  );
}
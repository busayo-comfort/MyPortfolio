// app/page.tsx

import Link from "next/link";
import { highlightedProject, otherProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-[#1A1A1A]">
      {/* NAVBAR */}
      <header className="border-b border-[#E8E2DB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link
            href="/"
            className="font-serif text-[2rem] font-bold tracking-[-0.04em]"
          >
            Busayomi.
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {["WORK", "ABOUT", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[0.78rem] tracking-[0.18em] text-[#6B6B6B] transition hover:text-[#1A1A1A]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-[#E8E2DB]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="mb-10 text-[0.78rem] tracking-[0.22em] text-[#6B6B6B]">
            FULL-STACK DEVELOPER · LAGOS, NIGERIA
          </p>

          <div className="max-w-4xl">
            <h1 className="font-serif text-[3.3rem] leading-[1.04] tracking-[-0.05em] md:text-[5.4rem]">
              Building systems for markets that actually matter.
            </h1>

            <p className="mt-10 max-w-2xl text-[1.1rem] leading-[2rem] text-[#6B6B6B]">
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
              <div className="flex items-center justify-center">
                <div className="flex h-[320px] w-full max-w-[420px] items-center justify-center bg-[#F5F0EB]">
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
                <div className="flex h-[180px] items-center justify-center bg-[#F5F0EB]">
                  <span className="font-serif text-4xl font-semibold text-[#CFC3B7]">
                    {project.name}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-4xl tracking-[-0.04em]">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-[#6B6B6B]">
                    {project.description}
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
      <footer
        id="contact"
        className="border-t border-[#E8E2DB]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <h3 className="font-serif text-3xl font-bold tracking-[-0.04em]">
            Busayomi.
          </h3>

          <div className="flex gap-8 text-[#6B6B6B]">
            <a href="https://github.com/busayo-the-programmer">
              GitHub
            </a>

            <a href="#">LinkedIn</a>

            <a href="#">Twitter</a>
          </div>

          <p className="text-[#B8B0A8]">© 2026</p>
        </div>
      </footer>
    </main>
  );
}
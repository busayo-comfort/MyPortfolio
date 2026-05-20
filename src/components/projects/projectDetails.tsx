import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { ProjectCategory } from '@/types'
import { projects } from '@/data/projects'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

type Props = {
  params: Promise<{ slug: string }>
}

const categoryLabel: Record<ProjectCategory, string> = {
  fullstack: 'Full-stack',
  'api-integration': 'API Integration',
  frontend: 'Frontend',
  clone: 'Clone',
  collaborative: 'Collaborative',
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — Busayomi`,
    description: project.tagline,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const index = projects.findIndex(p => p.slug === slug)
  if (index === -1) notFound()

  const project = projects[index]
  const prev = projects[index - 1] ?? null
  const next = projects[index + 1] ?? null

  const stats = [
    { label: 'Category', value: categoryLabel[project.category] },
    { label: 'Status', value: project.status === 'ongoing' ? 'Active Development' : 'Completed' },
    { label: 'Type', value: project.category === 'collaborative' ? 'Collaborative' : 'Solo' },
    { label: 'Stack', value: `${project.tech.length} technologies` },
  ]

  return (
    <div className="bg-cream min-h-screen font-sans">
      <Navbar />

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[12px] tracking-[.08em] uppercase text-ink-muted px-8 pt-8 pb-0"
      >
        ← Back to Work
      </Link>

      <section className="px-8 pt-9 pb-[52px] border-b border-cream-border grid grid-cols-[1.2fr_.8fr] gap-[52px] items-start">
        <div>
          <div className="flex gap-2 mb-4">
            {project.status === 'ongoing' && (
              <span className="inline-flex items-center gap-[7px] text-[11px] tracking-[.08em] uppercase bg-[#FEF3E2] text-[#854F0B] px-3 py-1">
                <span className="w-[6px] h-[6px] rounded-full bg-[#BA7517] animate-pulse" />
                Ongoing
              </span>
            )}
            <span className="inline-flex text-[11px] tracking-[.08em] uppercase bg-cream-muted text-ink-muted px-3 py-1 border border-cream-border">
              {categoryLabel[project.category]}
            </span>
          </div>

          <h1 className="font-serif text-[40px] font-bold leading-[1.15] text-ink mb-[14px]">
            {project.name}
          </h1>
          <p className="text-[15px] text-ink-muted leading-[1.7] mb-7 max-w-[380px]">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-[7px] mb-7">
            {project.tech.map(t => (
              <span
                key={t}
                className="text-[11px] px-[11px] py-1 bg-cream-muted text-ink-secondary border border-cream-border"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-cream px-[22px] py-[10px] text-[13px] tracking-[.03em]"
              >
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink text-ink px-[22px] py-[10px] text-[13px] tracking-[.03em]"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>

        <div className="bg-cream-muted border border-cream-border aspect-[4/3] flex flex-col items-center justify-center gap-[10px]">
          <span className="font-serif text-[48px] font-bold text-cream-placeholder tracking-[-2px]">
            {getInitials(project.name)}
          </span>
          <span className="text-[11px] tracking-[.1em] uppercase text-cream-placeholder">
            Project Preview
          </span>
        </div>
      </section>

      <section className="px-8 py-[52px] grid grid-cols-[1.4fr_.6fr] gap-[52px] items-start border-b border-cream-border">
        <div>
          <div className="bg-cream-surface border border-cream-border p-6 mb-10">
            <p className="text-[11px] tracking-[.1em] uppercase text-ink-muted mb-3">
              The Problem
            </p>
            <p className="text-[14px] leading-[1.8] text-ink italic border-l-2 border-cream-border pl-4">
              {project.problemStatement}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-serif text-[20px] font-bold text-ink mb-3">
              What it achieves
            </h2>
            <p className="text-[14px] leading-[1.8] text-ink-secondary">
              {project.whatItAchieves}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {stats.map(({ label, value }) => (
              <div key={label} className="bg-cream-surface border border-cream-border p-[18px]">
                <p className="text-[11px] tracking-[.06em] uppercase text-ink-muted mb-[6px]">
                  {label}
                </p>
                <p className="font-serif text-[15px] font-bold text-ink leading-[1.4]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="font-serif text-[20px] font-bold text-ink mb-3">My thinking</h2>
            <p className="text-[14px] leading-[1.8] text-ink-secondary">{project.motivation}</p>
          </div>
        </div>

        <div>
          <div className="bg-cream-surface border border-cream-border p-[22px] mb-4">
            <p className="text-[11px] tracking-[.1em] uppercase text-ink-muted mb-[14px]">
              What I learned
            </p>
            <ul className="list-none">
              {project.learnings.map((item, i) => (
                <li
                  key={i}
                  className="text-[13px] text-ink-secondary leading-[1.6] py-[7px] border-b border-cream-muted flex items-start gap-2 last:border-b-0 last:pb-0"
                >
                  <span className="text-cream-placeholder shrink-0 mt-[1px]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream-surface border border-cream-border p-[22px]">
            <p className="text-[11px] tracking-[.1em] uppercase text-ink-muted mb-[14px]">
              Tech Stack
            </p>
            <ul className="list-none">
              {project.tech.map((t, i) => (
                <li
                  key={i}
                  className="text-[13px] text-ink-secondary leading-[1.6] py-[7px] border-b border-cream-muted flex items-start gap-2 last:border-b-0 last:pb-0"
                >
                  <span className="text-cream-placeholder shrink-0 mt-[1px]">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="px-8 py-10 flex justify-between items-center">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="flex flex-col gap-1">
            <span className="text-[11px] tracking-[.1em] uppercase text-cream-placeholder">
              ← Previous
            </span>
            <span className="font-serif text-[16px] font-bold text-ink">{prev.name}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="flex flex-col gap-1 text-right">
            <span className="text-[11px] tracking-[.1em] uppercase text-cream-placeholder">
              Next →
            </span>
            <span className="font-serif text-[16px] font-bold text-ink">{next.name}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <Footer />
    </div>
  )
}
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'About — Busayomi',
  description: 'Full-stack developer building toward construction technology for Africa.',
}

const stack = [
  'Next.js', 'React', 'Node.js', 'Express',
  'MongoDB', 'Tailwind CSS', 'Python', 'Django',
]

const education = [
     {
    name: 'Professional Diploma in Software Engineering',
    org: 'SQI college of ICT',
    distinction: false,
    year: '2025 till date',
  },
  {
    name: 'Diploma in Web Development',
    org: 'HiiT — HTML, CSS, JavaScript, React, Node.js, Python, Django',
    distinction: true,
    year: '2023-2024',
  },
  {
    name: 'Muyiwa Bamgbose Academy',
    org: 'JCI Ibadan',
    distinction: false,
    year: '',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen font-sans">
      <Navbar />

      <section className="px-8 pt-18 pb-15 grid grid-cols-[1.3fr_.7fr] gap-13 items-start">
        <div>
          <p className="text-[11px] tracking-[.14em] uppercase text-ink-muted mb-5">
            About
          </p>
          <h1 className="font-serif text-[40px] leading-[1.2] font-normal text-ink mb-5.5">
            I write code to solve real problems.{' '}
            <em>I&apos;m building toward construction technology for Africa.</em>
          </h1>
          <p className="text-[14px] leading-[1.85] text-ink-secondary mb-5">
            I&apos;m a full-stack developer with a background that cuts across engineering,
            communication, and systems thinking. I don&apos;t just ship features — I think
            about why a product exists before I write the first line of code.
          </p>
          {/* <p className="text-[14px] leading-[1.85] text-ink-secondary">
            Before tech, I worked in public speaking and communication through The Counsel —
            helping people navigate uncertainty with clear frameworks. That lens follows
            everything I build.
          </p> */}
        </div>
        <div className="bg-cream aspect-square flex items-center justify-center max-w-50">
          <span className="font-serif text-[52px] font-bold text-cream-placeholder">B.</span>
        </div>
      </section>

      <div className="px-8 py-14">
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-serif text-[22px] font-bold text-ink mb-4">
              What I&apos;m building toward
            </h2>
            <p className="text-[14px] leading-[1.85] text-ink-secondary mb-4">
              I&apos;ve spent the last few months studying industries where AI can close
              critical feedback loops — construction, logistics, agriculture, field services.
              Construction won.
            </p>
            <p className="text-[14px] leading-[1.85] text-ink-secondary">
              Africa&apos;s built environment is growing fast, BIM adoption is still under 25%,
              and the site foreman is the untapped field agent that no one is building for.
              The goal is a platform that captures passive site data, runs conflict detection,
              and delivers role-targeted alerts to architects, structural engineers, quantity
              surveyors, and contractors.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-[22px] font-bold text-ink mb-4">
              How I work
            </h2>
            <p className="text-[14px] leading-[1.85] text-ink-secondary mb-4">
              I build full-stack end-to-end. I&apos;m comfortable owning a feature from
              database schema to UI, and I understand the why before I write the what.
            </p>
            <div className="bg-cream-surface p-6 mb-3">
              <p className="text-[11px] tracking-widest uppercase text-ink-muted mb-1.5">
                Solo
              </p>
              <p className="text-[13px] text-ink leading-[1.6]">
                Vendora, Threadly, OAU Portal, Recipe Finder, Amazon Clone
              </p>
            </div>
            <div className="bg-cream-surface p-6">
              <p className="text-[11px] tracking-widest uppercase text-ink-muted mb-1.5">
                Collaborative
              </p>
              <p className="text-[13px] text-ink leading-[1.6]">
                Contract Shield — onboarded into an existing codebase mid-build
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-[11px] tracking-[.14em] uppercase text-ink-muted mb-5">
            Education & Programs
          </p>
          {education.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-start py-4.5"
            >
              <div>
                <p className="text-[14px] font-medium text-ink mb-0.75">
                  {item.name}
                  {item.distinction && (
                    <span className="inline-block text-[10px] tracking-[.08em] uppercase bg-[#FEF3E2] text-[#854F0B] px-2 py-0.5 ml-2 align-middle">
                      Distinction
                    </span>
                  )}
                </p>
                <p className="text-[13px] text-ink-muted">{item.org}</p>
              </div>
              {item.year && (
                <span className="text-[12px] text-cream-placeholder ml-4 shrink-0">
                  {item.year}
                </span>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="text-[11px] tracking-[.14em] uppercase text-ink-muted mb-5">
            Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-2.5">
            {stack.map(tech => (
              <div
                key={tech}
                className="bg-cream-surface py-3.5 px-3 text-center text-[12px] text-ink-secondary tracking-[.02em]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-cream px-8 py-13 text-center">
        <h2 className="font-serif text-[26px] text-ink font-normal mb-2.5">
          If you&apos;re building something that matters,
          <br />
          I&apos;d like to hear about it.
        </h2>
        <p className="text-[13px] text-ink-muted mb-6 leading-[1.6]">
          Open to freelance projects, collaborations, and conversations
          <br />
          about construction technology in Africa.
        </p>
        <section className="mb-8">
          <div className="flex flex-col gap-3 justify-center items-center">
            <a
              href="mailto:busayoadebayo280@gmail.com"
              className="text-[14px] text-ink tracking-[.04em] border-b border-ink pb-0.5"
            >
              busayoadebayo280@gmail.com
            </a>
            <a
              href="https://wa.me/2347065687524"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-ink tracking-[.04em] border-b border-ink pb-0.5"
            >
              WhatsApp: +234 706 568 7524
            </a>
          </div>
        </section>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/busayo-comfort"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[.08em] uppercase text-ink-muted"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/busayo-adebayo-2a9a99306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[.08em] uppercase text-ink-muted"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/busayo_adebayo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[.08em] uppercase text-ink-muted"
          >
            Twitter
          </a>
        </div>
      </div>

      <Footer dark />
    </div>
  )
}
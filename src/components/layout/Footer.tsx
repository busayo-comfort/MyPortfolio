import Link from 'next/link'

export default function Footer({ dark = false }) {
  return (
    <footer
      className={`px-8 py-7 border-t flex justify-between items-center ${
        dark ? 'bg-ink border-[#2A2A2A]' : 'bg-cream border-cream-border'
      }`}
    >
      <span className={`font-serif text-[15px] ${dark ? 'text-cream' : 'text-ink'}`}>
        Busayomi.
      </span>
      <ul className="flex gap-5.5 list-none">
        {[
          { label: 'GitHub', href: 'https://github.com/' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/' },
          { label: 'Twitter', href: 'https://twitter.com/' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[12px] tracking-[.04em] ${
                dark ? 'text-[#555]' : 'text-ink-muted'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <span className={`text-[12px] ${dark ? 'text-[#555]' : 'text-cream-placeholder'}`}>
        © {new Date().getFullYear()}
      </span>
    </footer>
  )
}
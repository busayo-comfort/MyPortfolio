"use client"

import React from 'react'

const Navbar = () => {
  return (
    <header className="border-b border-[#E8E2DB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <p
            onClick={() => window.location.href = '/'}
            className="font-arial text-[2rem] font-bold tracking-[-0.04em]"
          >
            Busayomi.
          </p>

          <nav className="hidden items-center gap-10 md:flex">
            {["WORK", "ABOUT", "CONTACT"].map((item) => (
              <a
                key={item}
                href={item === "WORK" ? "#work" : item === "ABOUT" ? "/about" : "/contact"}
                className="text-[0.78rem] tracking-[0.18em] text-[#6B6B6B] transition hover:text-[#1A1A1A]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
  )
}

export default Navbar
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: '首页' },
  { href: '/selected-works', label: '精选作品' },
  { href: '/cinematic-frames', label: '电影帧' },
  { href: '/landscape', label: '风景' },
  { href: '/portraits', label: '人像' },
  { href: '/about', label: '关于' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-fg-accent/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        <Link
          href="/"
          className="block w-8 h-8 focus:outline-none focus:ring-2 focus:ring-fg-muted rounded"
          aria-label="首页"
        />
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`inline-block text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fg-muted rounded link-underline ${
                  pathname === href ? 'text-fg-accent link-underline-active' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="打开菜单"
          className="md:hidden p-2 text-fg focus:outline-none focus:ring-2 focus:ring-fg-muted rounded cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden border-t border-fg-accent/20 py-4 px-4 flex flex-col gap-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 text-sm ${pathname === href ? 'text-fg-accent' : 'text-fg-muted'}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

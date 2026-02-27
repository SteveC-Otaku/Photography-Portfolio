'use client';

export default function ScrollIndicator() {
  return (
    <a
      href="#featured"
      aria-label="向下滚动"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 no-underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fg/50 rounded cursor-pointer text-fg/80 hover:text-fg"
    >
      <span className="text-xs uppercase tracking-widest">向下滚动</span>
      <svg className="w-5 h-5 animate-bounce shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  );
}

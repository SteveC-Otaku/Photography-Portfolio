'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export default function FadeInSection({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`animate-on-scroll ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

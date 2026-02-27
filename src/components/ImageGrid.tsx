'use client';

import { useEffect, useRef, useState } from 'react';
import Lightbox from './Lightbox';

type ImageItem = { src: string; alt: string };

type ImageGridProps = {
  items: ImageItem[];
  masonry?: boolean;
  progressive?: boolean;
  chunkSize?: number;
};

export default function ImageGrid({ items, masonry = true, progressive = false, chunkSize = 12 }: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(progressive ? Math.min(chunkSize, items.length) : items.length);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!progressive) return;
    setVisibleCount(Math.min(chunkSize, items.length));
  }, [items, progressive, chunkSize]);

  useEffect(() => {
    if (!progressive) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleCount((v) => Math.min(v + chunkSize, items.length));
          }
        });
      },
      { rootMargin: '200px' }
    );
    const el = loadMoreRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [progressive, chunkSize, items.length]);

  const visibleItems = progressive ? items.slice(0, visibleCount) : items;

  return (
    <>
      <div
        className={
          masonry
            ? 'columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
        }
      >
        {visibleItems.map((item, i) => (
          <button
            type="button"
            key={item.src + i}
            className={
              masonry
                ? 'break-inside-avoid mb-4 md:mb-6 block w-full overflow-hidden rounded-sm focus:outline-none focus:ring-2 focus:ring-fg-muted cursor-pointer group'
                : 'relative aspect-[4/3] overflow-hidden bg-bg-secondary rounded-sm focus:outline-none focus:ring-2 focus:ring-fg-muted cursor-pointer group'
            }
            onClick={() => setLightboxIndex(i)}
          >
            {masonry ? (
              /* eslint-disable-next-line @next/next/no-img-element -- 瀑布流需保留原始宽高比 */
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>
      {progressive && visibleCount < items.length && <div ref={loadMoreRef} className="h-10" />}
      {lightboxIndex !== null && (
        <Lightbox
          images={visibleItems.map((i) => ({ src: i.src, alt: i.alt }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? visibleItems.length - 1 : (prev ?? 0) - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === visibleItems.length - 1 ? 0 : (prev ?? 0) + 1))}
        />
      )}
    </>
  );
}

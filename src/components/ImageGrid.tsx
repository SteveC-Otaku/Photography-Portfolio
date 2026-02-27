'use client';

import { useState } from 'react';
import Lightbox from './Lightbox';

type ImageItem = { src: string; alt: string };

type ImageGridProps = {
  items: ImageItem[];
  masonry?: boolean;
};

export default function ImageGrid({ items, masonry = true }: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div
        className={
          masonry
            ? 'columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
        }
      >
        {items.map((item, i) => (
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
      {lightboxIndex !== null && (
        <Lightbox
          images={items.map((i) => ({ src: i.src, alt: i.alt }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? items.length - 1 : (prev ?? 0) - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === items.length - 1 ? 0 : (prev ?? 0) + 1))}
        />
      )}
    </>
  );
}

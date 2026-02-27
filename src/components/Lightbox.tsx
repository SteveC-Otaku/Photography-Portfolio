'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

type LightboxProps = {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-bg/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="图片灯箱"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-fg-muted hover:text-fg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fg rounded cursor-pointer"
        aria-label="关闭"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-fg-muted hover:text-fg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fg rounded cursor-pointer disabled:opacity-30"
        aria-label="上一张"
        disabled={currentIndex === 0}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
        <Image
          src={current.src}
          alt={current.alt}
          width={2000}
          height={1333}
          className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
          unoptimized
        />
      </div>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-fg-muted hover:text-fg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fg rounded cursor-pointer disabled:opacity-30"
        aria-label="下一张"
        disabled={currentIndex === images.length - 1}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-fg-muted text-sm">
        {currentIndex + 1} / {images.length}
      </span>
    </div>
  );
}

import Link from 'next/link';
import ScrollIndicator from '@/components/ScrollIndicator';
import ImageGrid from '@/components/ImageGrid';
import FadeInSection from '@/components/FadeInSection';
import { heroBanner } from '@/data/images';
import { getImagesFromFolder } from '@/lib/read-images';

export default function HomePage() {
  const featuredPreview = getImagesFromFolder('homepage');
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 bg-bg overflow-hidden">
        <img
          src={heroBanner.replace(/ /g, '%20')}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[1]"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.65) 100%)',
          }}
        />
        <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center animate-fade-in text-fg">
          用光影讲述每一帧的情绪
        </h1>
        <p className="relative z-10 mt-4 text-fg/90 text-lg sm:text-xl md:text-2xl text-center max-w-xl animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          Where Light Tells the Story
        </p>
        <ScrollIndicator />
      </section>
      <section id="featured" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">精选作品</h2>
            <p className="text-fg-muted mb-10">2024–2026 部分作品预览</p>
            <ImageGrid items={featuredPreview} masonry={false} />
          </FadeInSection>
          <div className="mt-12 text-center">
            <Link
              href="/selected-works"
              className="inline-block px-6 py-3 border border-fg-accent text-fg-accent text-sm font-medium transition-colors duration-200 hover:bg-fg-accent/10 focus:outline-none focus:ring-2 focus:ring-fg-muted rounded cursor-pointer"
            >
              查看全部精选作品
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

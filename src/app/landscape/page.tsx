import ImageGrid from '@/components/ImageGrid';
import { getImagesFromFolder } from '@/lib/read-images';

export const metadata = {
  title: '风景 | Cheng Chen',
  description: '风景摄影精选。',
};

export default function LandscapePage() {
  const items = getImagesFromFolder('landscape');
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">风景</h1>
        <p className="text-fg-muted text-lg mb-12">风景摄影精选</p>
        <ImageGrid items={items} />
      </div>
    </div>
  );
}

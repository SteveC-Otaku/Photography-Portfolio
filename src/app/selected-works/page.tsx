import ImageGrid from '@/components/ImageGrid';
import { getImagesFromFolder } from '@/lib/read-images';

export const metadata = {
  title: '精选作品 2024–2026 | Cheng Chen',
  description: '时刻与视觉研究的精选集。',
};

export default function SelectedWorksPage() {
  const items = getImagesFromFolder('selected');
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">精选作品</h1>
        <ImageGrid items={items} masonry={false} />
      </div>
    </div>
  );
}

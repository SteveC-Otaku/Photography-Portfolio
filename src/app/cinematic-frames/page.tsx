import ImageGrid from '@/components/ImageGrid';
import { getImagesFromFolder } from '@/lib/read-images';

export const metadata = {
  title: '电影帧 | Cheng Chen',
  description: '现场剧照与视觉叙事瞬间。',
};

export default function CinematicFramesPage() {
  const items = getImagesFromFolder('cinematic');
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">电影帧</h1>
        <p className="text-fg-muted text-lg mb-6">现场剧照与视觉叙事瞬间</p>
        <p className="text-fg-muted text-base max-w-2xl mb-12">
          捕捉镜头之外的构图与情绪，用静态画面延续电影语言。
        </p>
        <ImageGrid items={items} progressive chunkSize={12} />
      </div>
    </div>
  );
}

import fs from 'fs';
import path from 'path';

const BASE_PREFIX = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const BASE = `${BASE_PREFIX}/images`;
const CATEGORIES = ['homepage', 'selected', 'cinematic', 'landscape', 'portraits'] as const;

export type ImageItem = { src: string; alt: string };

function getImagesDir(category: string): string {
  return path.join(process.cwd(), 'public', 'images', category);
}

export function getImagesFromFolder(category: (typeof CATEGORIES)[number]): ImageItem[] {
  const dir = getImagesDir(category);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith('.webp'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  return files.map((filename, i) => ({
    src: `${BASE}/${category}/${encodeURIComponent(filename)}`,
    alt: `${category} ${i + 1}`,
  }));
}

// 仅保留整站共用资源；各分类图片由 src/lib/read-images.ts 从文件夹动态读取

const base = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images`;

export const heroBanner = `${base}/Hero Banner.webp`;

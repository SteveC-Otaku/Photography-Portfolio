/**
 * 将 public/images 下所有 jpg/png 等转为 webp
 * 子文件夹内按 01.webp、02.webp… 编号，以符合代码引用；根目录保留原文件名.webp
 * 使用：npm run convert
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const extList = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'];

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile()) yield full;
  }
}

function groupByDir(files) {
  const map = new Map();
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!extList.includes(ext)) continue;
    const dir = path.dirname(file);
    if (!map.has(dir)) map.set(dir, []);
    map.get(dir).push(file);
  }
  return map;
}

async function run() {
  const allFiles = [...walk(imagesDir)];
  const byDir = groupByDir(allFiles);
  let done = 0;
  let skipped = 0;
  let errSkip = 0;

  for (const [dir, files] of byDir) {
    files.sort((a, b) => path.basename(a).localeCompare(path.basename(b), undefined, { numeric: true }));
    const isRoot = path.resolve(dir) === path.resolve(imagesDir);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const outName = isRoot
        ? path.basename(file, path.extname(file)) + '.webp'
        : `${String(i + 1).padStart(2, '0')}.webp`;
      const out = path.join(dir, outName);
      if (path.resolve(file) === path.resolve(out)) continue;
      if (fs.existsSync(out)) {
        const srcStat = fs.statSync(file);
        const outStat = fs.statSync(out);
        if (srcStat.mtimeMs <= outStat.mtimeMs) {
          console.log('已有', path.relative(imagesDir, out));
          skipped++;
          continue;
        }
      }
      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(out);
        console.log('OK', path.relative(imagesDir, out));
        done++;
      } catch (err) {
        if (err.code === 'ENOENT' || err.message?.includes('input')) {
          errSkip++;
          console.warn('Skip', path.relative(imagesDir, file), err.message);
        } else throw err;
      }
    }
  }

  console.log(`\n完成: 新转换 ${done} 张，已存在跳过 ${skipped} 张，无法读取 ${errSkip} 个。`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

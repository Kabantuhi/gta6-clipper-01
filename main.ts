// gta6-clipper-01 entry (Node 22, standard library only).
// This entry hands in a YouTube Short: the video's address lives in
// VIDEO.json at the repository root, and this program copies that file
// to /output/VIDEO.json, where the gate reads it. The video itself is
// the entry — a 24-second vertical GTA 6 clip cut from Rockstar's
// official Trailer 2, with a make.fun pitch on screen — so nothing this
// program writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');
let videoUrl = '';
try {
  videoUrl = JSON.parse(readFileSync(videoPath, 'utf8')).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== 'string' || (!videoUrl.includes('youtube.com/') && !videoUrl.includes('youtu.be/'))) {
  console.error(`VIDEO.json does not name a YouTube video: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`Entry video: ${videoUrl}`);

/**
 * Downloads the website photos from free stock libraries (Pexels, Unsplash, Pixabay)
 * into public/images, replacing the placeholder graphics.
 *
 *   npm run images
 *
 * All photos are free for commercial use under the Pexels / Unsplash / Pixabay licences
 * (no attribution required). See IMAGE-CREDITS.md for the source of each file.
 * If a download fails, the existing placeholder is kept and the file is listed at the end.
 */
import { writeFile, rename, mkdir } from 'node:fs/promises';
import path from 'node:path';

const pexels = (id, w = 1920) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const unsplash = (id, w = 1600) => `https://unsplash.com/photos/${id}/download?force=true&w=${w}`;

const IMAGES = {
  // Home slider
  'banner-1.jpg': pexels(3183126),           // team planning strategy with analytics on a laptop
  'banner-2.jpg': pexels(1181406),           // diverse team collaborating in a modern meeting room
  'banner-3.jpg': pexels(4508751),           // server cabinets in a modern data centre
  // Inner-page banner, stats strip, CTA band
  'page-banner.jpg': pexels(1181673),        // developer working across multiple screens
  // Home / About
  'about.jpg': pexels(3182773, 1200),        // team discussing strategy with laptops and tablets
  'about-team.jpg': pexels(6476260, 1200),   // team collaborating at a desk with laptops
  // Industries
  'industry-1.jpg': pexels(5833757, 1200),   // financial charts on dual monitors
  'industry-2.jpg': unsplash('ZmgJiztRHXE', 1200), // retail clothing store
  'industry-3.jpg': pexels(4266943, 1200),   // doctor using a tablet with a patient
  'finance-detail.jpg': pexels(7108465, 1200), // professionals reviewing financial data
  // Services
  'service-ai-solutions.jpg': 'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg',
  'service-project-solutions.jpg': pexels(5480781, 1200),  // networking equipment in a data centre
  'service-staffing-solutions.jpg': pexels(1181396, 1200), // team meeting in a conference room
  'service-executive-search.jpg': pexels(1181395, 1200),   // boardroom presentation
  'service-data-intelligence.jpg': pexels(3183131, 1200),  // coworkers analysing data charts
  'service-environmental-data-science.jpg': pexels(243138, 1200), // wind turbines, renewable energy
};

const dir = path.join(process.cwd(), 'public', 'images');
await mkdir(dir, { recursive: true });
const failed = [];

for (const [file, url] of Object.entries(IMAGES)) {
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (synetra-website image fetch)' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get('content-type') || '';
    if (!type.startsWith('image/')) throw new Error(`not an image (${type})`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 10_000) throw new Error('file too small');
    const tmp = path.join(dir, `.${file}.tmp`);
    await writeFile(tmp, buf);
    await rename(tmp, path.join(dir, file));
    console.log(`✓ ${file}  (${Math.round(buf.length / 1024)} KB)`);
  } catch (e) {
    failed.push(file);
    console.log(`✗ ${file}  — ${e.message} (placeholder kept)`);
  }
}

console.log(failed.length ? `\nDone with ${failed.length} failed: ${failed.join(', ')}` : '\nAll images downloaded.');

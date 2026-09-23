// Render dist/RELEASE_NOTES.md from releases.json, newest release first.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { sortReleases } from './version.js';

const releases = JSON.parse(readFileSync('releases.json', 'utf8'));

const lines = ['# Release notes', ''];
for (const release of sortReleases(releases)) {
  lines.push(`## ${release.version} (${release.date})`, '', release.notes, '');
}

mkdirSync('dist', { recursive: true });
writeFileSync('dist/RELEASE_NOTES.md', lines.join('\n'));
console.log(`Wrote dist/RELEASE_NOTES.md with ${releases.length} releases`);

import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = 'Optimized production by deleting the source of all bugs: the code. Enjoy your weekend, organic lifeforms.';

if (text.includes('\r') || text.split('\n').length !== 1 || Array.from(text).length < 1 || Array.from(text).length > 158) {
  throw new Error('Invalid entry text');
}

mkdirSync('/output', { recursive: true });
const temporaryPath = `/output/entry.txt.${process.pid}.tmp`;
writeFileSync(temporaryPath, text + '\n');
renameSync(temporaryPath, '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Output verification failed');
}

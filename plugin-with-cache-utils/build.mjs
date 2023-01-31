import { mkdir, readdir, writeFile } from 'node:fs/promises';

await mkdir('cache/.dot', { recursive: true });
await mkdir('cache/dist', { recursive: true });

console.log('content inside cache/.dot');
console.log(await readdir('cache/.dot'));

console.log('content inside cache/dist');
console.log(await readdir('cache/dist'));

console.log('write files');
await Promise.all([
  writeFile('cache/.dot/hello.txt', ''),
  writeFile('cache/dist/index.html', '<h1>hello world</h1>'),
]);

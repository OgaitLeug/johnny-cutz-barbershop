import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
} from 'node:fs';
import { join, sep } from 'node:path';

const projectRoot = process.cwd();
const distDirectory = join(projectRoot, 'dist');
const clientDirectory = join(distDirectory, 'client');
const pagesDirectory = join(distDirectory, 'pages');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const basePathDirectory = basePath.replace(/^\/+|\/+$/g, '');
const staticAssetsDirectory = basePathDirectory
  ? join(clientDirectory, basePathDirectory)
  : clientDirectory;

if (!existsSync(join(clientDirectory, 'index.html'))) {
  throw new Error('Static export is missing dist/client/index.html.');
}

if (!existsSync(staticAssetsDirectory)) {
  throw new Error(`Static assets are missing ${staticAssetsDirectory}.`);
}

if (!pagesDirectory.startsWith(`${distDirectory}${sep}`)) {
  throw new Error('Refusing to prepare files outside the dist directory.');
}

rmSync(pagesDirectory, { recursive: true, force: true });
mkdirSync(pagesDirectory, { recursive: true });

cpSync(staticAssetsDirectory, pagesDirectory, { recursive: true });
cpSync(join(projectRoot, 'public'), pagesDirectory, { recursive: true });
copyFileSync(
  join(clientDirectory, 'index.html'),
  join(pagesDirectory, 'index.html'),
);
copyFileSync(
  join(clientDirectory, 'index.html'),
  join(pagesDirectory, '404.html'),
);

const rscFile = join(clientDirectory, 'index.rsc');
if (existsSync(rscFile)) {
  copyFileSync(rscFile, join(pagesDirectory, 'index.rsc'));
}

console.log(`GitHub Pages artifact prepared in ${pagesDirectory}`);

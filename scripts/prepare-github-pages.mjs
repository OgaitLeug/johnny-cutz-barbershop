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
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

if (!repositoryName) {
  throw new Error('GITHUB_REPOSITORY is required to prepare GitHub Pages.');
}

const prefixedAssetsDirectory = join(clientDirectory, repositoryName);

if (!existsSync(join(clientDirectory, 'index.html'))) {
  throw new Error('Static export is missing dist/client/index.html.');
}

if (!existsSync(prefixedAssetsDirectory)) {
  throw new Error(`Static assets are missing ${prefixedAssetsDirectory}.`);
}

if (!pagesDirectory.startsWith(`${distDirectory}${sep}`)) {
  throw new Error('Refusing to prepare files outside the dist directory.');
}

rmSync(pagesDirectory, { recursive: true, force: true });
mkdirSync(pagesDirectory, { recursive: true });

cpSync(prefixedAssetsDirectory, pagesDirectory, { recursive: true });
cpSync(join(projectRoot, 'public'), pagesDirectory, { recursive: true });
copyFileSync(
  join(clientDirectory, 'index.html'),
  join(pagesDirectory, 'index.html'),
);

const rscFile = join(clientDirectory, 'index.rsc');
if (existsSync(rscFile)) {
  copyFileSync(rscFile, join(pagesDirectory, 'index.rsc'));
}

console.log(`GitHub Pages artifact prepared in ${pagesDirectory}`);

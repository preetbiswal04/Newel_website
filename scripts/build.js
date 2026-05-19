const fs = require('fs/promises');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const copyTargets = ['src', 'package.json', 'package-lock.json', 'README.md'];

async function cleanDist() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });
}

async function copyTarget(target) {
  const sourcePath = path.join(rootDir, target);
  const destinationPath = path.join(distDir, target);
  const stat = await fs.stat(sourcePath);

  if (stat.isDirectory()) {
    await fs.cp(sourcePath, destinationPath, { recursive: true });
    return;
  }

  await fs.copyFile(sourcePath, destinationPath);
}

async function writeBuildInfo() {
  const packageJson = require(path.join(rootDir, 'package.json'));
  const buildInfo = {
    name: packageJson.name,
    version: packageJson.version,
    builtAt: new Date().toISOString(),
  };

  await fs.writeFile(
    path.join(distDir, 'build-info.json'),
    `${JSON.stringify(buildInfo, null, 2)}\n`,
    'utf8'
  );
}

async function build() {
  await cleanDist();

  for (const target of copyTargets) {
    await copyTarget(target);
  }

  await writeBuildInfo();
  console.log(`Build export created at ${distDir}`);
}

build().catch((error) => {
  console.error('Build failed:', error.message);
  process.exit(1);
});

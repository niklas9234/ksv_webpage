#!/usr/bin/env node

const { existsSync } = require('node:fs');
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const nextBin = path.join(process.cwd(), 'node_modules', '.bin', 'next');
const nextPkg = path.join(process.cwd(), 'node_modules', 'next', 'package.json');

if (existsSync(nextBin) || existsSync(nextPkg)) {
  process.exit(0);
}

console.log('Fehlende Abhängigkeiten erkannt. Führe "npm install" aus ...');
const install = spawnSync('npm', ['install'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

if (install.status !== 0) {
  console.error('\nKonnte Abhängigkeiten nicht installieren.');
  console.error('Bitte führe "npm install" manuell aus und prüfe Netzwerk/Registry-Zugriff.');
  process.exit(install.status || 1);
}

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '../../../dist/apps/demo/browser');
const port = 4200;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8',
};

http.createServer((req, res) => {
  let p = new URL(req.url, `http://localhost:${port}`).pathname;
  let fp = path.join(root, p === '/' ? 'index.html' : p);
  if (!fs.existsSync(fp)) fp = path.join(root, 'index.html');
  let ext = path.extname(fp);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  res.end(fs.readFileSync(fp));
}).listen(port);

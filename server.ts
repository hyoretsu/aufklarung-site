/* eslint-disable no-console */
import fs from 'fs';
import { createServer } from 'https';
import next from 'next';
import path from 'path';
import { parse } from 'url';

const app = next({ dev: true });
const handle = app.getRequestHandler();

const start = async (): Promise<void> => {
 const httpsOptions = {
  key: fs.readFileSync(path.resolve(__dirname, '..', 'private.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '..', 'private.crt')),
 };
 await app.prepare();

 const server = createServer(httpsOptions, (req, res) => {
  handle(req, res, parse(req.url, true));
 });

 const port = 3000;
 server.listen(port, () => {
  console.log(`ready - started server on url: https://localhost:${port}`);
 });
};

start();

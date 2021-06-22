import fs from 'fs';
import { screenshot } from './browser';

(async () => {
  await fs.promises.mkdir('public', { recursive: true });
  await fs.promises.writeFile('public/index.html', '<img src="/image.png">');

  await screenshot('https://www.google.com.vn/');
})();

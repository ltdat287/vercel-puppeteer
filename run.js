import fs from 'fs';
import { screenshot } from './browser';

(async (request, response) => {
  const { url } = request.query;
	await fs.promises.mkdir('public', { recursive: true });
	await fs.promises.writeFile('public/index.html', '<img src="/image.png">');

  console.log('request.query', request.query);
  let urlTarget = url || 'https://www.google.com.vn/';

	await screenshot(urlTarget);
})();

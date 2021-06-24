import fs from 'fs';
import { screenshot } from '../browser';

const handler = async (req, res) => {
  const { url = 'https://www.google.com.vn/' } = req.query;
	console.log('request.query', req.query);
	await fs.promises.mkdir('public', { recursive: true });
	await fs.promises.writeFile('public/index.html', '<img src="/image.png">');

	await screenshot(url);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	fs.createReadStream(path.resolve(__dirname, 'public/index.html')).pipe(res);
};

module.exports = handler;

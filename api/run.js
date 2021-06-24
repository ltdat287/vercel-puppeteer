import fs from 'fs';
import { screenshot } from '../browser';

const handler = async (req, res) => {
  const { url = 'https://www.google.com.vn/' } = req.query;
	console.log('request.query', req.query);
	await fs.promises.mkdir('public', { recursive: true });
	await fs.promises.writeFile('public/index.html', '<img src="/image.png">');

	await screenshot(urlTarget);

	res.sendFile('public/index.html', { root: __dirname });
};

module.exports = handler;

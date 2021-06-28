import { screenshot } from '../browser';

const handler = async (req, res) => {
  const { url = 'https://www.google.com.vn/' } = req.query;
	console.log('request.query', req.query);
	await screenshot(url);

	res.send('<html><body><img src="./image.png"></body></html>');
};

module.exports = handler;

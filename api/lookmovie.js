import { getLinkPlayList } from '../browser';

const handler = async (req, res) => {
	const { url = 'https://www.google.com.vn/' } = req.query;
	console.log('request.query', req.query);
	var urls = await getLinkPlayList(url);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ urls }));
};

module.exports = handler;

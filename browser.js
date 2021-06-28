import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

const screenshot = async (url = '') => {
	const browser = await puppeteer.launch(
		process.env.AWS_EXECUTION_ENV
			? {
					args: chrome.args,
					executablePath: await chrome.executablePath,
					headless: chrome.headless,
			  }
			: {
					args: [],
					executablePath:
						process.platform === 'win32'
							? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
							: process.platform === 'linux'
							? '/usr/bin/google-chrome'
							: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
			  },
	);

	const page = await browser.newPage();
	await page.setViewport({ width: 2000, height: 1000 });
	await page.goto(url, { waitUntil: 'networkidle0' });
	await page.screenshot({ type: 'png', path: 'public/image.png' });
	await browser.close();
  
	return true;
}

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

const getLinkPlayList = async (url = '') => {
	var urls = [];
	const browser = await puppeteer.launch(
		process.env.AWS_EXECUTION_ENV
			? {
					args: chrome.args,
					executablePath: await chrome.executablePath,
					headless: chrome.headless,
			  }
			: {
					args: [],
					executablePath:
						process.platform === 'win32'
							? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
							: process.platform === 'linux'
							? '/usr/bin/google-chrome'
							: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
			  },
	);

	const page = await browser.newPage();
	page.setUserAgent(
		'Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/28.2725; U; ru) Presto/2.8.119 Version/11.10',
	);
	page.on('request', (request) => {
		if (request.resourceType() === 'xhr') {
			console.log('request', request._url);
			urls.push(request._url);
		}
	});
	await page.setViewport({ width: 2000, height: 1000 });
	await page.goto(url, { waitUntil: 'networkidle0' });
	await browser.close();

	return urls;
};

export { screenshot, getLinkPlayList };

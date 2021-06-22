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

export { screenshot };

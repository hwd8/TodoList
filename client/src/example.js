const puppeteer = require('puppeteer')

let browser;
let page;

// 2
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 250
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

afterAll(() => {
  // browser.close();
  console.log("YAY")
});
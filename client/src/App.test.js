import puppeteer from "puppeteer"; // 1

let browser;
let page;

jest.setTimeout(10000)

// 2
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

describe('on page load', () => {
  test('app loads correctly', async() => {
    await page.waitForSelector(".App");
    const header = await page.$eval(".App-intro", e => e.innerHTML);
    expect(header).toBe(';');
  })
})

afterAll(() => {     
  console.log("YAY")
  browser.close()
})
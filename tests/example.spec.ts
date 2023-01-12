import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.shopbase.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ShopBase/);
});

test('add to cart 02', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/products/lee-straight-jean');
  await page.waitForTimeout(10*1000);
  // click button
  await page.click("//button[@id='add-to-cart']");
  console.log('add to cart succes');
  //get cart number
  const cartNumber = await page.locator("//span[@class = 'cart-number']").textContent();
  console.log(cartNumber);
  //expect cart number is 01
  expect(cartNumber).toEqual("01");
});
test('add to cart 03', async ({ page }) => {
  await page.goto('https://hiendo2.sbprod.tk/products/lee-straight-jean');
  await page.waitForTimeout(10*1000);
  // click button
  await page.click("//button[@id='add-to-cart']");
  console.log('add to cart succes');
  //
  await page.goto('https://hiendo2.sbprod.tk/cart');
  await page.waitForTimeout(5*1000);
  const cost = await page.locator("//p[@class = 'h5 product-cart__price']").textContent();
  console.log(cost);
  expect(cost).toEqual("$188.00   ");
  const num = await page.locator("//input[@class = 'quantity__num'] ").inputValue();
  expect(num).toEqual("1");
  console.log(num);
});
test('Login', async ({ page }) => {
  //login
  await page.goto('https://bai-1.onshopbase.com/admin/');
  await page.waitForTimeout(2*1000);
  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');
  await page.click("//button[@type='submit']");
  await page.waitForTimeout(2*1000);
  await page.click("//span[normalize-space()='Products']");
  await page.click("//span[normalize-space()='Add product']");
  await page.waitForTimeout(2*1000);
  await page.locator("//input[@placeholder='Short Sleeve T-Shirt']").fill('iPhone 14 Pro Max 128GB - MaiLe');
  await page.click("//a[normalize-space()='Add variant']");
  await page.waitForTimeout(2*1000);
  await page.locator("//input[@id='option-name']").fill('Color');
  await page.locator("//input[@placeholder='Separate options with comma']").fill('Space black, Silver, Gold, Deep Purple');
  await page.click("//span[normalize-space()='Save product']");
  // await page.waitForTimeout(4*1000);
  // await page.click("//span[normalize-space()='View']");
  // await page.waitForTimeout(2*1000);
  // const title = await page.locator("//h1[@class='h4 d-block product__name mt0 mb12 product__name-product']").textContent();
  // console.log(title);
  // expect(title).toEqual("iPhone 14 Pro Max 128GB - MaiLe");
  // await page.goto('https://bai-1.onshopbase.com/admin/');
  // await page.waitForTimeout(2*1000);
  await page.click("//span[normalize-space()='Products']");
  await page.click("//span[normalize-space()='Collections']");
  await page.waitForTimeout(2*1000);
  await page.click("//p[normalize-space()='Manual collections']");
  await page.waitForTimeout(2*1000);
  await page.click("//span[normalize-space()='Create collection']");
  await page.locator("//input[@placeholder='e.g Summer collection, Under $100, Staff picks']").fill('Mobile phone');
  await page.click("//span[normalize-space()='Manual']");
  await page.click("//span[normalize-space()='Save']");
  await page.click("//button[normalize-space()='Add product']");
  await page.locator("//input[@placeholder='Search for product']").fill('iPhone 14 Pro Max 128GB - MaiLe');
  await page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
  await page.click("//a[@class='s-button is-outline is-small']");
  await page.waitForTimeout(10*1000);
  // await page.goto('https://bai-1.onshopbase.com/admin/');
  // await page.waitForTimeout(5*1000);
  // await page.click("//span[normalize-space()='Discounts']");
  // await page.click("//span[normalize-space()='Create discount']");
  // await page.locator("//input[@placeholder='e.g. SUMMERSALE']").fill('OCG_2023_TALENT');
  // await page.locator("//input[@placeholder='0']").fill('10');
  // await page.click("//span[normalize-space()='Specific products']");
  // await page.locator("//input[@placeholder='Search products']").fill('iPhone 14 Pro Max 128GB - MaiLe');
  // await page.waitForTimeout(3*1000);
  // await page.click("//body/div[@id='app']/div[@class='unite-ui-frame vertical-screen']/main[@class='s-mb96 unite-ui-dashboard__main menu-expand']/div[@class='m-t-ex container padding-for-select-plan-bar']/div/div[@class='discount-detail-page']/div[@class='row']/div[@class='col-xs-12 col-sm-8']/form[@class='s-form']/div[@class='section s-mt24']/div[@class='section-body s-flex s-flex--vertical s-mt4']/div[@class='select-product-component s-mt16']/div[@class='s-modal is-active modal-select-product modal-select-item']/div[@class='s-modal-wrapper']/div[@class='s-animation-content s-modal-content']/div[@class='s-modal-body']/div[@class='item-list']/div[@class='item-wrapper']/div[@class='item']/label[@class='s-checkbox']/span[2]");
  // await page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
  // await page.click("//span[normalize-space()='Save']");




  // veryfi
  // await page.click("//span[normalize-space()='All products']");
  // await page.waitForTimeout(2*1000);
  // await page.click("//span[normalize-space()='iPhone 14 Pro Max 128GB - MaiLe']");
  // await page.waitForTimeout(2*1000);
  // const pagePromise = context.waitForEvent('page');
  // await page.click("//i[@class='mdi mdi-eye mdi-18px d-flex']");
  // const newPage = await pagePromise;
  // await newPage.waitForLoadState();
  // console.log(await newPage.title());
  // await page.waitForTimeout(10*1000);
  
});
test('Login 2', async ({ page }) => {
  await page.goto('https://bai-1.onshopbase.com/admin/');
  await page.waitForTimeout(2*1000);
  await page.locator("//input[@id='email']").fill('tuyetle+1@beeketing.net');
  await page.locator("//input[@id='password']").fill('123456');
  await page.click("//button[@type='submit']");
  await page.waitForTimeout(2*1000);
  await page.goto('https://bai-1.onshopbase.com/admin/discounts');
  await page.waitForTimeout(2*1000);
  await page.click("//span[normalize-space()='Create discount']");
  await page.waitForTimeout(2*1000);
  await page.locator("//input[@placeholder='e.g. SUMMERSALE']").fill('OCG_2023_TALENT');
  await page.locator("//input[@placeholder='0']").fill('10');
  await page.click("//span[normalize-space()='Specific products']");
  await page.locator("//input[@placeholder='Search products']").fill('iPhone 14 Pro Max 128GB - MaiLe');
  await page.waitForTimeout(3*1000);
  await page.click("//div[@class='select-product-component s-mt16']//span[@class='s-flex s-flex--align-center'][normalize-space()='Browse']");
  await page.waitForTimeout(3*1000);
  await page.click("//div[@class='s-modal-body']/div[@class='item-list']/div[2]/div[1]/label[1]/span[1]");
  await page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
  await page.click("//span[normalize-space()='Save']");
  await page.waitForTimeout(5*1000);
//span[normalize-space()='Discounts']
});

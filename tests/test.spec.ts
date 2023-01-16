import {test, expect} from '@playwright/test';
import { LoginPage} from './Login_page.page';
import { AdminPortalPage } from './Admin-portal.page';
// test.beforeAll(async () => {
//     console.log('Before tests');
//   });
test('add product', async ({ page, context }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillAccount();
    await loginPage.login();
    await page.waitForTimeout(3*1000);
    const adminPortalPage = new AdminPortalPage(page);
    await adminPortalPage.gotoAddProduct();
    await adminPortalPage.fillProduct();
    await page.waitForTimeout(3*1000);
    await adminPortalPage.saveProduct();
    await page.waitForTimeout(3*1000);
    const [productStorefrontPage] = await Promise.all([
        context.waitForEvent('page'),
        await page.click('//i[@class="mdi mdi-eye mdi-18px d-flex"]'),
      ]);
      await productStorefrontPage.waitForTimeout(5 * 1000);
      //verify
      const result = await productStorefrontPage
        .locator(
          "//h1[@class='h4 d-block product__name mt0 mb12 product__name-product']"
        )
        .textContent();
      console.log(result);
      expect(result?.trim()).toEqual('iPhone 14 Pro Max 128GB - MaiLe');
      const createOptions = ['Space black', 'Silver', 'Gold', 'Deep Purple'];
      const optionLocator = await productStorefrontPage
        .locator("//button[contains(@class, 'product__option')]")
        .all();
      for (let i = 0; i < optionLocator.length; i++) {
        const optionText = await optionLocator[i].textContent();
        expect(optionText).toEqual(createOptions[i]);
        console.log(optionText);
      }
      const price = await productStorefrontPage
        .locator("//div[@class='product__price h4']")
        .textContent();
      console.log(price);
      expect(price?.trim()).toEqual('$120.00');
    });
test('add collection', async ({ page, context }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.fillAccount();
        await loginPage.login();
        await page.waitForTimeout(3*1000);
        const addcollection = new AdminPortalPage(page);
        await addcollection.gotoCreatCollection();
        await addcollection.fillCollection();
        await addcollection.saveCollection();
        await addcollection.AddProductInCollection();
        await addcollection.fillProductInCollection();
        await addcollection.SelectProduct();
        await addcollection.SaveCollection();
        await page.waitForTimeout(3*1000);
      //verify
      const [storefrontCollectionPage] = await Promise.all([
        context.waitForEvent("page"),
        await page.click("//a[@class='s-button is-outline is-small']"),
      ]);
    
      await storefrontCollectionPage.waitForLoadState("networkidle");
    
      const result = await storefrontCollectionPage
            .locator(
                "//div[@class='row mt16 product-grid']//div[1]//div[1]//a[1]//div[2]//span[@class='title d-block cl-black']"
            )
            .textContent();
      expect(result).toEqual("iPhone 14 Pro Max 128GB - MaiLe");
    });
 test('add discount', async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.fillAccount();
  await loginPage.login();
  await page.waitForTimeout(3*1000);


});
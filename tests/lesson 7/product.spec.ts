import test from "@playwright/test";
import { LoginPage } from "../../src/pages/authentication/login.page";
import { ProductPage } from "../../src/pages/dashboard/product.page";
import { AddProductPage} from "../../src/pages/dashboard/product_child_page.page";
test.beforeEach(async ({page}) => {
  const loginPage = new LoginPage(page);
 
    await loginPage.goto();
    await loginPage.fillAccount();
    await loginPage.login();
    await loginPage.page.waitForTimeout(5 * 1000);
  });
test('test add product', async ({ page, context }) => {
    const productPage = new ProductPage(page);
    const addProductPage = new AddProductPage(page);
    await test.step('Click add product', async () => {
      await productPage.page.waitForTimeout(5 * 1000);
      await productPage.navigateToMenu('Products');
      await productPage.clickButtonCreateProduct();
      await productPage.page.waitForTimeout(5 * 1000);
    });
  
    await test.step('Add Product', async () => {
      await addProductPage.addProduct();
      await addProductPage.page.waitForTimeout(5 * 1000);
    });
  
    await test.step('Verify information', async () => {
      await addProductPage.verifyProduct({ context });
    });
    await test.step('Delete product', async () => {
      await productPage.navigateToMenu('Products');
      await addProductPage.deleteProduct('iPhone 14 Pro Max 128GB - MaiLe');
    });


   
  });
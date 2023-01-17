
import { LoginPage } from "../../src/pages/authentication/login.page";
import { ProductPage } from "../../src/pages/dashboard/product.page";
import { Product } from "../../src/pages/types/product.type";
import { AddProductPage } from "../../src/pages/dashboard/product_child_page.page";
import { test } from "../../src/fixtures/product.fixture";
// test.beforeEach(async ({page}) => {
//   const loginPage = new LoginPage(page);

//     await loginPage.goto();
//     await loginPage.fillAccount();
//     await loginPage.login();
//     await loginPage.page.waitForTimeout(5 * 1000);
//   });
test('test add product', async ({ productPage, context }) => {
  // const productPage = new ProductPage(page);
  //const addProductPage = new AddProductPage(page);
  await test.step('Click add product', async () => {
    await productPage.page.waitForTimeout(5 * 1000);
    await productPage.navigateToMenu('Products');
    await productPage.clickButtonCreateProduct();
    await productPage.page.waitForTimeout(5 * 1000);
  });
  await test.step('Add Product', async () => {
    const product: Product = {
      name: "iPhone 14 Pro Max 128GB - MaiLe",
      price: 120,
      option: {
        name: "Colors",
        values: ["Space black", "Silver", " Gold", "Deep Purple"],
      }
    }
    await productPage.addProduct(product);

  });

  await test.step('Verify information', async () => {
    await productPage.verifyProduct({ context });
  });
});

    // test.afterAll(async ({page}) => {
    //   const productPage = new ProductPage(page);
    //   const addProductPage = new AddProductPage(page);
    //   await productPage.page.goto("https://bai-1.onshopbase.com/admin/");
    //   await productPage.navigateToMenu('Products');
    //   await addProductPage.deleteProduct('iPhone 14 Pro Max 128GB - MaiLe');
    // });

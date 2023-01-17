import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/Authentication/Login.page'
import { ProductPage } from '../pages/dashboard/product.page'
import { AddProductPage } from "../../src/pages/dashboard/product_child_page.page";

const test = base.extend<{ productPage: ProductPage }>({
    productPage: async ({ page }, use) => {
        // Login vao dashboard
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const addProductPage = new AddProductPage(page);

        await loginPage.goto();
        await loginPage.fillAccount();
        await loginPage.login()
        await productPage.navigateToMenu("Products");
        await page.waitForLoadState("networkidle");

        // use
        await use(productPage);
        //after
        await productPage.page.goto("https://bai-1.onshopbase.com/admin/");
        await productPage.navigateToMenu('Products');
        await addProductPage.deleteProduct('iPhone 14 Pro Max 128GB - MaiLe');

    }
})

export {
    test,
    expect
};
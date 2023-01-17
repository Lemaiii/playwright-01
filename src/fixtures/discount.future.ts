import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/Authentication/Login.page'
import { DiscountPage } from '../pages/dashboard/discount.page'
import { CreateDiscountPage } from "../../src/pages/dashboard/discount_child_page.page";
const test = base.extend<{ discountPage:DiscountPage }>({
    discountPage: async ({ page }, use) => {
        // Login vao dashboard
        const loginPage = new LoginPage(page);
        const discountPage = new DiscountPage(page);
        const createDiscountPage = new DiscountPage(page);
        await loginPage.goto();
        await loginPage.fillAccount();
        await loginPage.login();
        await discountPage.navigateToMenu("Discounts");
        await discountPage.navigateToMenu("Discounts");
        await page.waitForLoadState("networkidle");

        // use
        await use(discountPage);
        //after
        await discountPage.page.goto("https://bai-1.onshopbase.com/admin/");
        await discountPage.navigateToMenu('Products');
        await discountPage.navigateToMenu('Discounts');
        await discountPage.deleteDiscount('OCG_2023_TALENT');

    }
})

export{
    test,
    expect
};
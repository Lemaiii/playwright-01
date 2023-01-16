import test from "@playwright/test";
import { LoginPage } from "../../src/pages/authentication/login.page";
import { DiscountPage } from "../../src/pages/dashboard/discount.page";
import { CreateDiscountPage } from "../../src/pages/dashboard/discount_child_page.page";
test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillAccount();
    await loginPage.login();
    await loginPage.page.waitForTimeout(5 * 1000);
});
test('test add discount', async ({ page, context }) => {
    const discountPage = new DiscountPage(page);
    const createDiscountPage = new CreateDiscountPage(page);
    await test.step('Click create discount', async () => {
        await discountPage.navigateToMenu('Discounts');
        // await discountPage.clickButtonCreateDiscount();
        await discountPage.page.waitForTimeout(5 * 1000);
    });
    //   await test.step('Create discount', async () => {
    //     await createDiscountPage.createDiscount();
    //     await createDiscountPage.page.waitForTimeout(5 * 1000);
    //   });
    //   await test.step('Checkout', async () => {
    //     await createDiscountPage.checkout();
    //     await createDiscountPage.page.waitForTimeout(5 * 1000);
    //   });
    //   await test.step('Verify price', async () => {
    //     await createDiscountPage.verifiPrice();
    //     await createDiscountPage.page.waitForTimeout(5 * 1000);
    //   });
    await test.step('Edit discount', async () => {
        await createDiscountPage.editDiscount();
        await createDiscountPage.page.waitForTimeout(5 * 1000);
    });
    await test.step('Verify discount', async () => {
        await createDiscountPage.verifyDiscount();
        await createDiscountPage.page.waitForTimeout(5 * 1000);
    });
});
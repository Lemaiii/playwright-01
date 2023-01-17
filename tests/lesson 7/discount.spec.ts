
import { LoginPage } from "../../src/pages/authentication/login.page";
import { DiscountPage } from "../../src/pages/dashboard/discount.page";
import { CreateDiscountPage } from "../../src/pages/dashboard/discount_child_page.page";
import {test} from "../../src/fixtures/discount.future";
// test.beforeEach(async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.fillAccount();
//     await loginPage.login();
//     await loginPage.page.waitForTimeout(5 * 1000);
// });
test('test add discount', async ({ discountPage, context }) => {
    // const discountPage = new DiscountPage(discountPage);
    // const createDiscountPage = new CreateDiscountPage(discountPage);
    await test.step('Click button create discount', async () => {
        await discountPage.clickButtonCreateDiscount();
        await discountPage.page.waitForTimeout(5 * 1000);
    });
    // await test.step('Click create discount', async () => {
    //     await discountPage.navigateToMenu('Discounts');
    //     // await discountPage.clickButtonCreateDiscount();
    //     await discountPage.page.waitForTimeout(5 * 1000);
    // });
      await test.step('Create discount', async () => {
        await discountPage.createDiscount();
        await discountPage.page.waitForTimeout(5 * 1000);
      });
      await test.step('Checkout', async () => {
        await discountPage.checkout();
        await discountPage.page.waitForTimeout(5 * 1000);
      });
      await test.step('Verify price', async () => {
        await discountPage.verifiPrice();
        await discountPage.page.waitForTimeout(5 * 1000);
      });
    // await test.step('Edit discount', async () => {
    //     await discountPage.editDiscount();
    //     await discountPage.page.waitForTimeout(5 * 1000);
    // });
    // await test.step('Verify discount', async () => {
    //     await discountPage.verifyDiscount();
    //     await discountPage.page.waitForTimeout(5 * 1000);
    // });
});
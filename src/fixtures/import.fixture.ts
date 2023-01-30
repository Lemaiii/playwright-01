import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/Authentication/Login.page'
import { ImportPage } from '../pages/dashboard/import_product.page'
const test = base.extend<{ importPage: ImportPage }>({
    importPage: async ({ page }, use) => {
        // Login vao dashboard
        const loginPage = new LoginPage(page);
        const importPage = new ImportPage(page);
        await loginPage.goto();
        await loginPage.fillAccount();
        await loginPage.login()
        await importPage.navigateToMenu("Apps");
        await importPage.navigateToMenu("Apps");
        await page.waitForLoadState("networkidle");
 // use
 await use(importPage);
 //after
 

}
})

export {
test,
expect
};
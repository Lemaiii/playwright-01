import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../pages/Authentication/Login.page'
import { CollectionPage } from '../pages/dashboard/collection.page'
import { CreateCollectionPage } from "../../src/pages/dashboard/collection_child_page.page";


const test = base.extend<{ collectionPage: CollectionPage }>({
    collectionPage: async ({ page }, use) => {
        // Login vao dashboard
        const loginPage = new LoginPage(page);
        const collectionPage = new CollectionPage(page);
        const createCollectionPage = new CreateCollectionPage(page);
        await loginPage.goto();
        await loginPage.fillAccount();
        await loginPage.login();
        await collectionPage.navigateToMenu("Products");
        await page.waitForLoadState("networkidle");

        // use
        await use(collectionPage);
        //after
        await collectionPage.page.goto("https://bai-1.onshopbase.com/admin/");
        await collectionPage.navigateToMenu('Products');
        await collectionPage.navigateToMenu('Collections');
        await collectionPage.deleteCollection('Mobile phone');

    }
})

export{
    test,
    expect
};
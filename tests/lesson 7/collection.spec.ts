import test from "@playwright/test";
import { LoginPage } from "../../src/pages/authentication/login.page";
import { CollectionPage } from "../../src/pages/dashboard/collection.page";
import { CreateCollectionPage} from "../../src/pages/dashboard/collection_child_page.page";
test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillAccount();
    await loginPage.login();
    await loginPage.page.waitForTimeout(5 * 1000);
}); 
test('test add collection', async ({ page, context }) => {
    const collectionPage = new CollectionPage(page);
    const createCollectionPage = new CreateCollectionPage(page);
    await test.step('Click create collection', async () => {
      await collectionPage.navigateToMenu('Products');
      await collectionPage.navigateToMenu('Collections');
      await collectionPage.buttonCreateCollection();
      await collectionPage.page.waitForTimeout(5 * 1000);
    });
  
    await test.step('Create collection', async () => {
      await createCollectionPage.CreateCollection();
      await createCollectionPage.page.waitForTimeout(5 * 1000);
    });
  
    await test.step('Verify info-rmation', async () => {
      await createCollectionPage.VerifyCollection(context);
    });
  });
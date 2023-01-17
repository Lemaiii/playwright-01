
import { LoginPage } from "../../src/pages/authentication/login.page";
import { CollectionPage } from "../../src/pages/dashboard/collection.page";
import { CreateCollectionPage} from "../../src/pages/dashboard/collection_child_page.page";
import {test} from "../../src/fixtures/collection.fixture";

// test.beforeEach(async ({page}) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.fillAccount();
//     await loginPage.login();
//     await loginPage.page.waitForTimeout(5 * 1000);
// }); 
test('test add collection', async ({collectionPage, context }) => {
    // const collectionPage = new CollectionPage(collectionPage);
    // const createCollectionPage = new CreateCollectionPage(collectionPage);
    await test.step('Click create collection', async () => {
      await collectionPage.navigateToMenu('Collections');
      await collectionPage.buttonCreateCollection();
      await collectionPage.page.waitForTimeout(5 * 1000);
    });
  
    await test.step('Create collection', async () => {
      await collectionPage.CreateCollection();
      await collectionPage.page.waitForTimeout(5 * 1000);
    });
  
    await test.step('Verify info-rmation', async () => {
      await collectionPage.verifyCollection(context);
    });
  });
  //   test.afterAll(async ({page}) => {
  //     const collectionPage = new CollectionPage(page);
  //     const createCollectionPage = new CreateCollectionPage(page);
  //     await collectionPage.page.goto("https://bai-1.onshopbase.com/admin/");
  //     await collectionPage.navigateToMenu('Colections');
  //     await createCollectionPage.deleteCollection('Mobile phone');

  // });
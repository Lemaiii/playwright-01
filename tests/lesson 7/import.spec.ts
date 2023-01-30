import {test} from "../../src/fixtures/import.fixture";
import { LoginPage } from "../../src/pages/authentication/login.page";
import { ImportPage} from "../../src/pages/dashboard/import_product.page";
test('test import product', async ({ importPage, context }) => {
        await test.step('import product', async () => {
            await importPage.clickImportList();
            await importPage.page.waitForTimeout(5 * 1000);
            await importPage.clickBtnImport();
            await importPage.importProduct();
            await importPage.verifyImportProduct();

        });
    });
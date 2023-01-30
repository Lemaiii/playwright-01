import { Page, expect } from "@playwright/test";
import { DashboardPage } from "./dashboard.page";

export class ImportPage extends DashboardPage {
    constructor(page: Page) {
        super(page);
    }
    async clickImportList(){
        await this.page.getByText('Ali Dropship Connector').click();
        await this.page.locator("//a[normalize-space()='Import List']").click();
    }
    async clickBtnImport(){
        await this.page.locator("//span[@class='s-flex s-flex--align-center']//span[contains(text(),'Import')]").click();
    }
    async importProduct( ){
        await this.page.locator("//input[@placeholder='Please enter the URL of products on AliExpress']").fill('https://vi.aliexpress.com/item/1005005043613178.html');
        // await this.page.waitForLoadState("networkidle");
        await this.page.locator("//button[@class='s-button is-primary']//span[@class='s-flex s-flex--align-center'][normalize-space()='Import']").click();
    }
    async verifyImportProduct( ){
        const result = await this.page.locator(
                "//a[contains(text(),'jingyuqin Flip Folding Remote car Key Shell For Ch')]"
            )
            .textContent();
        console.log(result);
        expect(result?.trim()).toEqual('jingyuqin Flip Folding Remote car Key Shell For Chevrolet Cruze Epica Lova Camaro Impala 2 3 4 5 Button HU100 Blade');
    }
}
import { Locator, Page, expect } from "@playwright/test";
import { CollectionPage } from "./collection.page";
export class CreateCollectionPage extends CollectionPage {
    constructor(page: Page) {
        super(page);
    }
    async CreateCollection() {
        await this.page.locator("//input[@placeholder='e.g Summer collection, Under $100, Staff picks']").fill('Mobile phone');
        await this.page.keyboard.press('Enter');
        await this.page.locator("//div[@class='col-md-8 col-xs-12']//div[1]//label[1]//span[2]").click();
        await this.page.locator("//span[normalize-space()='Save']").click();
        await this.page.locator("//button[normalize-space()='Add product']").click();
        await this.page.locator("//input[@placeholder='Search for product']").type('iPhone 14 Pro Max 128GB - MaiLe', {
            delay: 100,
        });
        await this.page.waitForTimeout(5 * 1000);
        await this.page.click(
            "//div[@class='item-list']//div[1]//div[1]//label[1]//span[1]"
        );

        await this.page.click("//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']");
        await this.page.waitForTimeout(3 * 1000);
    }
    async VerifyCollection(context) {
        const [storefrontCollectionPage] = await Promise.all([
            context.waitForEvent("page"),
            await this.page.click("//a[@class='s-button is-outline is-small']"),
          ]);
          await storefrontCollectionPage.waitForLoadState("networkidle");
        
          const result = await storefrontCollectionPage
                .locator(
                    "//div[@class='row mt16 product-grid']//div[1]//div[1]//a[1]//div[2]//span[@class='title d-block cl-black']"
                )
                .textContent();
          expect(result).toEqual("iPhone 14 Pro Max 128GB - MaiLe");
}
}
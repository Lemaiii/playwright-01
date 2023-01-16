import { Locator, Page, expect } from "@playwright/test";
import { ProductPage } from "./product.page";
export class AddProductPage extends ProductPage {
    constructor(page: Page) {
        super(page);
    }
    async addProduct() {
        await this.page.locator("//input[@placeholder='Short Sleeve T-Shirt']").fill('iPhone 14 Pro Max 128GB - MaiLe');
        await this.page.locator("//input[@id='price']").fill('120');
        await this.page.locator("//a[@class='pull-right']").click();
        await this.page.locator("//input[@id='option-name']").fill('Color');
        await this.page.locator("//input[@placeholder='Separate options with comma']").fill('Space black, Silver, Gold, Deep Purple');
        await this.page.keyboard.press('Enter');
        await this.page.locator("//span[normalize-space()='Save product']").click();
    }
    async verifyProduct({ context }) {
        const [productStorefrontPage] = await Promise.all([
            context.waitForEvent('page'),
            await this.page.click('//i[@class="mdi mdi-eye mdi-18px d-flex"]'),
        ]);
        await productStorefrontPage.waitForTimeout(5 * 1000);
        //verify name
        const result = await productStorefrontPage
            .locator(
                "//h1[@class='h4 d-block product__name mt0 mb12 product__name-product']"
            )
            .textContent();
        console.log(result);
        expect(result?.trim()).toEqual('iPhone 14 Pro Max 128GB - MaiLe');
        //verify variants
        const createOptions = ['Space black', 'Silver', 'Gold', 'Deep Purple'];
        const optionLocator = await productStorefrontPage
            .locator("//button[contains(@class, 'product__option')]")
            .all();
        for (let i = 0; i < optionLocator.length; i++) {
            const optionText = await optionLocator[i].textContent();
            expect(optionText).toEqual(createOptions[i]);
            console.log(optionText);
        }
        //verify price
        const price = await productStorefrontPage
            .locator("//div[@class='product__price h4']")
            .textContent();
        console.log(price);
        expect(price?.trim()).toEqual('$120.00');
    }
    async deleteProduct(Name: string) {
        await this.page.click('//tbody/tr[1]/td[1]/label[1]/span[1]');
        await this.page.click("//span[normalize-space()='Action']");
        await this.page.click(`//span[normalize-space()='Delete selected products'and normalize-space()="${Name}"]`);
}
}
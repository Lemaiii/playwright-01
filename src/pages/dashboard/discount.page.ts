import { Page, expect } from "@playwright/test";
import { DashboardPage } from "./dashboard.page";

export class DiscountPage extends DashboardPage {
    constructor(page: Page) {
        super(page);
    }
    async clickButtonCreateDiscount() {
        await this.page.getByText('Create discount').click();
    }
    async createDiscount() {
        await this.page.locator("//input[@placeholder='e.g. SUMMERSALE']").fill('OCG_2023_TALENT');
        await this.page.locator("//input[@placeholder='0']").fill('10');
        await this.page.click("//span[normalize-space()='Specific products']");
        await this.page.click("//input[@placeholder='Search products']");
        await this.page
            .locator("//input[@placeholder='Search products']")
            .fill("iPhone 14 Pro Max 128GB - MaiLe");
        await this.page.keyboard.press("Space");
        await this.page.keyboard.press("Backspace");
        await this.page.waitForTimeout(3 * 1000);
        await this.page.click(
            "//div[@class='item-list']//div[1]//div[1]//label[1]//span[1]"
        );
        await this.page.click(
            "//div[@class='s-modal-footer']//span[@class='s-flex s-flex--align-center'][normalize-space()='Save']"
        );
        await this.page.waitForTimeout(4 * 1000);
        await this.page.click("//span[normalize-space()='Save']");
        await this.page.waitForTimeout(4 * 1000);
    }
    async checkout() {
        await this.page.goto('https://bai-1.onshopbase.com/products/iphone-14-pro-max-128gb-maile-7?digest=1fae967a481c99860f20ed19f4a8dfbbe5ee2e10e706b2c0b1ae694f41f07c66');
        await this.page.waitForTimeout(3 * 1000);
        await this.page.click("//span[normalize-space()='Add to cart']");
        await this.page.click("//button[normalize-space()='Checkout']");
        await this.page.locator("//input[@id='checkout_shipping_address_email']").fill("lephuongmaie@gmail.com");
        await this.page.locator("//input[@id='checkout_shipping_address_first_name']").fill("Mai");
        await this.page.locator("//input[@id='checkout_shipping_address_last_name']").fill("mai");
        await this.page.locator("//input[@id='checkout_shipping_address_address_line1']").fill("abc");
        await this.page.locator("//input[@id='checkout_shipping_address_city']").fill("abc");
        await this.page
            .locator("//input[@id='checkout_shipping_address_zip']")
            .fill("10000");
        await this.page
            .locator("//input[@id='checkout_shipping_address_phone']")
            .fill("0123456789");
        await this.page.click("//button[normalize-space()='Continue to shipping method']");
        await this.page.waitForTimeout(3 * 1000);
        await this.page.locator("//input[@placeholder='Enter your promotion code']").fill("OCG_2023_TALENT");
        await this.page.click("//button[normalize-space()='Apply']");
        await this.page.click("//button[normalize-space()='Continue to payment method']");
        await this.page
            .frameLocator("//div[@id='stripe-card-number']//iframe")
            .locator('[placeholder="Card number"]')
            .fill("4242424242424242");
        await this.page.waitForTimeout(3 * 1000);
        await this.page.locator("//input[@placeholder='Cardholder name']").fill("Mai");
        await this.page
            .frameLocator("//div[@id='stripe-card-expiry']//iframe")
            .locator('[placeholder="MM/YY"]')
            .fill("0328");
        await this.page
            .frameLocator("//div[@id='stripe-card-cvc']//iframe")
            .locator('[placeholder="CVV"]')
            .fill("123");
        await this.page.click("//button[normalize-space()='Complete order']");
        await this.page.waitForTimeout(3 * 1000);
    }
    async verifiPrice() {
        const finalPrice = await this.page
            .locator("//span[@class='payment-due__price']")
            .textContent();
        console.log(finalPrice);
        expect(finalPrice).toEqual("$114.99");
    }
    // async editDiscount() {
    //     await this.page.click("//span[normalize-space()='OCG_2023_TALENT']");
    //     await this.page.click("//i[@class='mdi mdi-clock-outline mdi-18px']");
    //     await this.page.click("//span[normalize-space()='20']");
    //     await this.page.click("//span[normalize-space()='Confirm']");
    //     await this.page.waitForTimeout(2 * 1000);
    //     await this.page.click("//span[normalize-space()='Save']");
    //     await this.page.waitForTimeout(5 * 1000);
    // }
    async verifyDiscount() {
        const notActive = await this.page
            .locator("//p[@class='text-normal text-gray400 s-mt16']")
            .textContent();
        console.log(notActive);
        expect(notActive?.trim()).toEqual("Discount is not active yet.");
    }
    async deleteDiscount(nameDiscount: string) {
        await this.page.locator("//input[@placeholder='Search']").fill(nameDiscount);
        await this.page.keyboard.press('Enter');
        await this.page.click("//tbody//span[@class='s-check']");
        await this.page.click("//span[normalize-space()='Actions']");
        await this.page.click("//span[normalize-space()='Delete selected collections']");
        await this.page.click("//span[normalize-space()='Delete']");
    }

}
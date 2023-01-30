import { expect, Locator, Page } from "@playwright/test";
export class LoginPage{
     page: Page;
     email: Locator;
     password: Locator;
     loginButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.email = page.locator("//input[@id='email']");
        this.password = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//button[@type='submit']");
    }
    async goto() {
        await this.page.goto("https://accounts.shopbase.com/sign-in");
        await this.page.waitForTimeout(3 * 1000);
    }
    async fillAccount(){
        await this.email.fill("tuyetle+1@beeketing.net");
        await this.password.fill("123456");
    }
     async login(){
        await this.loginButton.click();
        await this.page.waitForTimeout(3 * 1000);
        await this.page.goto("https://maile-add-discount.onshopbase.com/admin");
}
}
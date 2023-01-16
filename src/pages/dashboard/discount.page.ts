import { Page } from "@playwright/test";
import { DashboardPage } from "./dashboard.page";

export class DiscountPage extends DashboardPage {
    constructor(page: Page) {
        super(page);
    }
    async clickButtonCreateDiscount(){
        await this.page.getByText('Create discount').click();
    }
}
import { Page } from "@playwright/test";
import { DashboardPage } from "./dashboard.page";

export class ProductPage extends DashboardPage {
    constructor(page: Page) {
        super(page);
    }

    async clickButtonCreateProduct(){
        await this.page.getByText('Add product').click();
    }
}
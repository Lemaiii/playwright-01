import { Page } from "@playwright/test";
import { DashboardPage } from "./dashboard.page";

export class CollectionPage extends DashboardPage {
    constructor(page: Page) {
        super(page);
    }

    async buttonCreateCollection(){
        await this.page.getByText('Create collection').click();

    }
}
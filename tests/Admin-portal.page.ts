import { expect, Locator, Page } from "@playwright/test";
export class AdminPortalPage{
     page: Page;
     product: Locator;
     allProduct: Locator;
     addProduct: Locator;
     productTitle: Locator;
     productPrice: Locator;
     addVariants: Locator;
     variantsOptionName: Locator;
     variantsOptionValues: Locator;
     saveProductButton: Locator;
     collection: Locator;
     manualCollection: Locator;
     creatCollection: Locator;
     collectionTitle: Locator;
     saveCollectionButton: Locator;
     collectionType: Locator;
     addProductInCollection: Locator;
     searchProuct: Locator;
     selectProduct: Locator;
     saveSelectProduct: Locator;
     discount: Locator;
     creatDiscount: Locator;
     discountTitle: Locator;
     discountValue: Locator;
     appliesProduct:Locator;
    constructor(page: Page){
        this.page = page;
        this.product =page.locator("//span[normalize-space()='Products']");
        this.allProduct = page.locator("//span[normalize-space()='All products']");
        this.addProduct = page.locator("//button[@class='s-button pull-right s-button is-primary m-l-sm is-default']");
        this.productTitle = page.locator("//input[@placeholder='Short Sleeve T-Shirt']");
        this.productPrice = page.locator("//input[@id='price']");
        this.addVariants = page.locator("//a[@class='pull-right']");
        this.variantsOptionName = page.locator("//input[@id='option-name']");
        this.variantsOptionValues = page.locator("//input[@placeholder='Separate options with comma']");
        this. saveProductButton = page. locator("//span[normalize-space()='Save product']");
        this.collection = page.locator("//span[normalize-space()='Collections']");
        this.manualCollection =page.locator("//p[normalize-space()='Manual collections']");
        this.collectionType =page.locator("//div[contains(@class,'col-md-8 col-xs-12')]//div[1]//label[1]//span[1]");
        this.creatCollection = page.locator("//div[@class='order-action-bar d-flex justify-content-space-between']//div//button[@type='button']");
        this.collectionTitle = page.locator("//input[@placeholder='e.g Summer collection, Under $100, Staff picks']");
        this.saveCollectionButton = page.locator("//span[normalize-space()='Save']");
        this.addProductInCollection =page.locator("//button[normalize-space()='Add product']");
        this.searchProuct = page.locator("//input[contains(@placeholder,'Search for product')]");
        this.selectProduct = page.locator("//div[@class='item-list']//div[1]//div[1]//label[1]//span[1]");
        this.saveSelectProduct = page.locator("//div[contains(@class,'s-modal-footer')]//button[1]");
        this.discount = page.locator("//span[normalize-space()='Discounts']");
        this.creatDiscount = page.locator("//span[normalize-space()='Create discount']");
        this.discountTitle = page.locator("//input[contains(@placeholder,'e.g. SUMMERSALE')]");
        this.discountValue = page.locator("//input[@placeholder='0']");
        this.appliesProduct = page.locator("//span[normalize-space()='Specific products']");
    }
    async gotoAddProduct(){
        await this.product.click();
        await this.page.waitForTimeout(2 * 1000);
        await this.addProduct.click();
        await this.page.waitForTimeout(2 * 1000);
    }
    async fillProduct(){
        await this.productTitle.fill('iPhone 14 Pro Max 128GB - MaiLe');
        await this.productPrice.fill('120');
        await this.addVariants.click();
        await this.variantsOptionName.fill('Color');
        await this.variantsOptionValues.fill('Space black, Silver, Gold, Deep Purple');
        await this.page.keyboard.press('Enter');
    }
    async saveProduct(){
        await this.saveProductButton.click();
        await this.page.waitForTimeout(2 * 1000);
    }
  async gotoCreatCollection (){
        await this.product.click();
        await this.page.waitForTimeout(2 * 1000);
        await this.collection.click();
        await this.page.waitForTimeout(2 * 1000);
        await this.manualCollection.click();
        await this.creatCollection.click();
  }
    async fillCollection(){
        await this.collectionTitle.fill('Mobile phone');
        await this.page.waitForTimeout(2 * 1000);
        await this.collectionType.click();
    }
    async saveCollection(){
        await this.saveCollectionButton.click();
        await this.page.waitForTimeout(2 * 1000);
    }
    async AddProductInCollection(){
        await this.addProductInCollection.click();
        await this.page.waitForTimeout(2 * 1000);

    }
    async fillProductInCollection(){
        await this.searchProuct.fill('iPhone 14 Pro Max 128GB - MaiLe');
        await this.page.waitForTimeout(2 * 1000);
    }
    async SelectProduct(){
        await this.selectProduct.click();
        await this.page.waitForTimeout(3* 1000);

    }
    async SaveCollection(){
        await this.saveSelectProduct.click();
        await this.page.waitForTimeout(3* 1000);
    }
    async gotoAddDiscount(){
        await this.discount.click();
        await this.creatDiscount.click();
        
    }
    async fillDiscount(){
        await this.discountTitle.fill("OCG_2023_TALENT");
        await this.discountValue.fill("10");
    }

    async AppliesProduct(){
        await this.appliesProduct.click();
    }
    
}
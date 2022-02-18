const FashionPage = require('../basic_pages/epage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ECommercePage extends FashionPage {
    
    get womenButton() {
        return '//*[@id="block_top_menu"]/ul/li[1]/a'
    }

    get blouseElementHover() {
        return '//*[@id="block_top_menu"]/ul/li[1]/ul/li[1]/ul/li[2]/a';
    }

    get blouseElement() {
        return '//*[@id="center_column"]/ul/li/div/div[2]/h5/a'
    }

    get blouseName() {
        return '//*[@id="center_column"]/div/div/div[3]/h1'
    }

    get addToCartItem() {
        return '//*[@id="add_to_cart"]/button'
    }

    get addedToCart() {
        return '//*[@id="layer_cart"]/div[1]/div[1]/h2'
    }

    get proceedToCheckout() {
        return 'a[title="Proceed to checkout"]'
        
    }

    get checkoutBlouse() {
        return $('th[class="cart_product first_item"]')
    }

    get orderQuantity() {
        return '//*[@id="product_2_7_0_0"]/td[5]/input[2]'
    }

    get finalPrice() {
        return '#total_price'
    }

    async checkoutForm() {
        const firstHover = await $(this.womenButton);
        await $(firstHover.selector).moveTo();
        await $(this.blouseElementHover).waitForDisplayed();
        await $(this.blouseElementHover).click();
        await $(this.blouseElement).waitForDisplayed();
        await $(this.blouseElement).click()
    }

    async addToCart() {
        await $(this.addToCartItem).click()
    }

    async checkoutVerification(quantity) {
     
        await $(this.proceedToCheckout).click()
        await $(this.orderQuantity).setValue(quantity);
    }

    open() {
        return super.open('');
    }
}

module.exports = new ECommercePage();
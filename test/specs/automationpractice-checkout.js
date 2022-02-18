const ECommercePage = require('../pageobjects/fashion_page/fashion.page')

describe('Choose a product', () => {
    it('should choose a product and verify Qty before proceed to checkout', async () => {
        await ECommercePage.open();

        await ECommercePage.checkoutForm();
        await expect($(ECommercePage.blouseName)).toHaveText('Blouse');
        await ECommercePage.addToCart();
        await expect($(ECommercePage.addedToCart)).toHaveText('Product successfully added to your shopping cart');
        await ECommercePage.checkoutVerification('2');
        await expect($(ECommercePage.finalPrice)).toHaveText('$56.00');
    });
});
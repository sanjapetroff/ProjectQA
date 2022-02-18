const HoverPage = require('../pageobjects/hover_page/hover.page');

describe('Hover image for additional info', () => {
    it('should hover over the image to see info', async () => {
        await HoverPage.open();

        /** assert (expect) that header exists and has correct label (name) */ 
        await expect($(HoverPage.titleHeader)).toBeExisting();
        await expect($(HoverPage.titleHeader)).toHaveText('Hovers');

        /**hover over picture 1 and assert (expect) that text below the picture exists and has correct label (name) */
        await HoverPage.hoverOver();
        await expect($(HoverPage.imageText1)).toBeExisting();
        await expect($(HoverPage.imageText1)).toHaveText('name: user1');
    });
});



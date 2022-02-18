const DropdownPage = require('../pageobjects/dropdown_page/dropdown.page');

describe('Dropdown list', () => {
    it('should verify the header titile and open and click an option from the dropdown', async () => {
        await DropdownPage.open();

        await expect($(DropdownPage.pageTitle)).toHaveText('Dropdown List');
        const attribute = await DropdownPage.chooseOptions("Option 1");

        await expect(attribute).toBe("true");
    });
});



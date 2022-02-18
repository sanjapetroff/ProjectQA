

const Page = require('../basic_pages/page');

class DropdownPage extends Page {

    get pageTitle() {
        const headerTitle = '//*[@id="content"]/div/h3'
        return headerTitle;
    }

    get dropdownList() {
        return $('#dropdown')      
    }

    get clickedOption1() {
        return $('//*[@id="dropdown"]/option[2]');
    }

    async chooseOptions (value) {
        await $(await this.dropdownList).selectByVisibleText(value);

        const option = await $$('option')
        const attr = await option[1].getAttribute('selected')
        return attr;
    }

    open() {
        return super.open('dropdown');
    }
}

 module.exports = new DropdownPage();

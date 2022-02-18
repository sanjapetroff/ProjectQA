const Page = require('../basic_pages/page');

class HoverPage extends Page {
    
    get titleHeader() {
        const headerElement = '//*[@id="content"]/div/h3'
        return headerElement;
    }

    get firstImg() {
        const imageOne = '//*[@id="content"]/div/div[1]/img'
        return imageOne;
    }

    get imageText1() {
        const textImageText = '//*[@id="content"]/div/div[1]/div/h5'
        return textImageText;
    }

    async hoverOver () {
        const titleText = await $('h3=Hovers');
        const firstImageHover = await $(this.firstImg);
        await $(firstImageHover.selector).moveTo();
    }

    open() {
        return super.open('hovers');
    }
}

module.exports = new HoverPage();

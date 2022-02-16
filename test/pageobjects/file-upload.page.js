const Page = require('./page');

class FileUploadPage extends Page {

    get pageTitle() {
        return '//*[@id="content"]/div[1]/h3'
    }

    get chooseFile() {
        return $('#file-upload')
    }

    get uploadBox() {
        return $('drag-drop-upload');
    }

    get uploadButton() {
        return $('file-submit');
    }

    async chooseOptions (value) {
        await $(await this.dropdownList).selectByVisibleText(value);

        const option = await $$('option')
        const attr = await option[1].getAttribute('selected')
        return attr;
    }

    open() {
        return super.open('upload');
    }
}

 module.exports = new FileUploadPage();

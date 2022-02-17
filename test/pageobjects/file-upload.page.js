const Page = require('./page');
const path = require('path');

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
        return $('#file-submit');
    }

    get fileUploadedTitle() {
        return '//*[@id="content"]/div/h3';
    }

    get uploadMessage() {
        return $('#uploaded-files')
    }

    async uploadFileButton() {
        const filePath = path.join(__dirname, '../data/SP_eCommerce_test_plan.docx');
        const fileUploader = await browser.uploadFile(filePath);

        await this.chooseFile.setValue(fileUploader);
        await this.uploadButton.waitForEnabled();
        await this.uploadButton.click();
    }

    open() {
        return super.open('upload');
    }
}

 module.exports = new FileUploadPage();
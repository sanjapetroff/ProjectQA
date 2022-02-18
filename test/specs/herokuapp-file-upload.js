const FileUploadPage = require('../pageobjects/file_upload_page/file-upload.page');

describe('Upload file', () => {
    it('upload file using button', async () => {
        await FileUploadPage.open();

        /** assert (expect) that header exists and has correct label (name) */ 
        await expect($(FileUploadPage.pageTitle)).toBeExisting();
        await expect($(FileUploadPage.pageTitle)).toHaveText('File Uploader');

        /** upload a file */
        await FileUploadPage.uploadButton.waitForDisplayed();
        await FileUploadPage.uploadFileButton();
        
        /** assert that file is uploaded */
        await FileUploadPage.uploadMessage.waitForDisplayed({timeout:5000});
        await expect($(FileUploadPage.fileUploadedTitle)).toHaveText('File Uploaded!');
    });
});
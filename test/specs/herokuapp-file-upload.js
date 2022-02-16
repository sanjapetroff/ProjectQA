const FileUploadPage = require('../pageobjects/file-upload.page');



describe('Upload file', () => {
    it('upload file using drag and drop', async () => {
        await FileUploadPage.open();

        /** assert (expect) that header exists and has correct label (name) */ 
        await expect($(FileUploadPage.pageTitle)).toBeExisting();
        await expect($(FileUploadPage.pageTitle)).toHaveText('File Uploader');

        /**hover over picture 1 and assert (expect) that text below the picture exists and has correct label (name) */
        // await HoverPage.hoverOver();
        // await expect($(HoverPage.imageText1)).toBeExisting();
        // await expect($(HoverPage.imageText1)).toHaveText('name: user1');
    });
});



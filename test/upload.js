import { Selector } from "testcafe";

const fileUpload = Selector('#file-upload')
const fileSubmit = Selector("#file-submit")


fixture("File Upload")
.page("https://the-internet.herokuapp.com/upload")


test("uploading a file", async t  =>{
    await t
    .maximizeWindow()
    .setFilesToUpload(fileUpload,'../../upload/MicrosoftTeams-image.png')
    .clearUpload(fileUpload)
    .setFilesToUpload(fileUpload,'../../upload/MicrosoftTeams-image.png')
    .debug()
    .click(fileSubmit)
    .wait(5000)
})


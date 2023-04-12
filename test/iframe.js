import { Selector, t } from "testcafe";

const iName = Selector('#mce_0_ifr');
const textArea = Selector('#tinymce');

fixture("Iframe")
.page("https://the-internet.herokuapp.com/iframe")

test("iFrame test", async t =>{
    await t
    .switchToIframe(iName)
    .click(textArea)
    .pressKey('ctrl+a delete')
    .typeText(textArea,"hello bro")
    .expect(textArea.innerText).contains('bro')
    .switchToMainWindow();

})
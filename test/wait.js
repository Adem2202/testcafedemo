import { Selector } from "testcafe"

const userName = Selector("#developer-name");
const osOption = Selector("#windows");
const button = Selector("#submit-button");

fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example");


test
("First Test", async t =>{
    const userNameElement = await userName.with({visibilityCheck: true})();
    await t
    .maximizeWindow()
    .setTestSpeed(0.01)
    .expect(userName.value).eql('','input is empty')
    .typeText(userName,"BALU")
    .expect(userName.value).eql('BAL','input contains')
    .click(osOption)
    .click(button)
})
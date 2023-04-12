import { Selector,ClientFunction } from "testcafe";

const userName = Selector("#developer-name");
const osOption = Selector("#windows");
const button = Selector("#submit-button");

const getUrl = ClientFunction(() => window.location.href);

fixture("First Fixture")
.page("https://devexpress.github.io/testcafe/example");


test
("First Test", async t =>{
    await t
    .maximizeWindow()
    .typeText(userName,"BAL")
    .click(osOption)
    .click(button)
    .expect(getUrl()).contains('test');
})
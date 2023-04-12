import { Selector } from "testcafe";

const cookies = Selector('.button')
const loginButton = Selector('#header-content > div.header-right > div.header-right-wrapper > div > span:nth-child(3) > a');
const userName = Selector('#s-user');
const passWord = Selector('#s-pass');
const loginbtn = Selector('#btnLogin');

fixture.meta("version","1")("First Fixture")
.page("https://devexpress.github.io/testcafe/");


test.skip.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
    .typeText("#developer-name","BALU")
    .click("#windows")
    .click("#submit-button")
    .wait(6000)
})

test.page("https://www.turbify.com/")
('login page', async t => {
    await t
        .maximizeWindow()
        .click(cookies)
        .click(loginButton)
        .typeText(userName,'adembalu2202@gmail.com')
        .typeText(passWord,'password')
        .click(loginbtn)
        .expect(userName.value).eql('adembalu2202@gmail.com','email id exists')
        .wait(4000);
})
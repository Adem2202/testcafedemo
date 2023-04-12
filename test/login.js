import { Selector } from "testcafe";

const loginButton = Selector('#header-content > div.header-right > div.header-right-wrapper > div > span:nth-child(3) > a');
const userName = Selector('#s-user');
const passWord = Selector('#s-pass');
const loginbtn = Selector('#btnLogin');
fixture("Login Page")
    .page("https://www.turbify.com/")

test
('login page', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .click(loginButton)
        .typeText(userName,'adembalu2202@gmail.com')
        .typeText(passWord,'password')
        .click(loginbtn)
        .expect(userName.value).eql('adembal202@gmail.com','email id exists')
        .wait(4000);
})
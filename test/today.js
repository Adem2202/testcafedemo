import { Selector } from "testcafe";


const cookies = Selector(".button")
const loginTurbify = Selector("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3) > a:nth-child(1)");
const userInput = Selector("#s-user");
const passInput = Selector("#s-pass");
const loginBtn = Selector("#btnLogin");
const showBtn = Selector('#form-lgn > div > div:nth-child(5) > div > div > div > span > a > span');




fixture("Turbify")
    .page("https://www.turbify.com/")
test('Login Page', async t => {
    await t
        .maximizeWindow()
        .click(cookies)
        .click(loginTurbify)
        .typeText(userInput, "adembalu2202@gmail.com")
        .typeText(passInput, "pass")
        .click(showBtn)
        .click(loginBtn)
})


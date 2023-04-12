import { Selector } from "testcafe";

fixture("Test Structure")
    .page("https://www.turbify.com");
test.meta('action','bussiness maker')
('Bussiness Maker', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .click('#header-content > div.header-left > div > ul > li:nth-child(2) > span > a')
        .click("#page-businessMaker > div.section.BusinessMakerMicroSite-content.ctaRibbon.section-fixedHeight.section-vertical-centered > div > div > div > div > div > div.BusinessMakerMicroSite-footerbutton.col-12 > button > div")

})

fixture("Login Page")
    .page("https://www.turbify.com/")
test.meta('action','login')
('login page', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .click('#header-content > div.header-right > div.header-right-wrapper > div > span:nth-child(3) > a')
        .typeText('#s-user', 'adembalu2202@gmail.com')
        .typeText('#s-pass', 'password')
        .click('#btnLogin')
        .wait(4000);
})

fixture("Web Essentials")
    .page("https://www.turbify.com")
  test.meta('action','web')
('Automation on Web Essentials', async t => {
    await t
        .maximizeWindow()
        .click('.button')
        .hover('#header-content > div.header-left > div > ul > li:nth-child(1) > span > a')
        .click("div.OutsideClickAlerter ul li .Link a.Link-content.Link-navigation[href='/hosting']")
})

fixture("Mail")
    .page("https://www.turbify.com/mail")
test.meta('action','mail')
("Automation on Mail", async t => {
    await t
        .maximizeWindow()
        .click(".button")
        .click("#MailPricingTables > div > div > div > div > div > div > div > div.fourPlans > div > div:nth-child(1) > div > ul > li.alice-carousel__stage-item.__active.__target > div > div > div.CheckoutLink > span > a > button > div")

})



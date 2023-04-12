import { Selector as $ } from "testcafe";

const cookies = ($(".button"));
const getStarted = ($('span[class="Link buttonLink HeroImage-ctaButton"]'));
const oneMail = ($('#MailPricingTables > div > div > div > div > div > div > div > div.fourPlans > div > div:nth-child(1) > div > ul > li.alice-carousel__stage-item.__active.__target > div > div > div.CheckoutLink > span > a > button > div'));
const domainName = ($('input[name="search"]'));
const searchBtn = ($('div[class="linearForm-submit linearForm-submit-transparent"]'));
const addCart = ($('button[id="balu.guru"]'))
const continueBtn = ($('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > div > button > div'));
const loginBtn = ($('span[class="Link login-ctalink"]'))
const userName = ($('input[name="userid"]'))
const password = ($('input[name="passwd"]'))
const sigIn = ($('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > button > div'))




fixture("Presales page")
    .page("https://www.turbify.com/mail");

test("Mail", async t => {
    await t
        .maximizeWindow()
        .debug()
        .click(cookies)
        .click(getStarted)
        .click(oneMail)
        .typeText(domainName, 'balu.guru')
        .click(searchBtn)
        .click(addCart)
        .click(continueBtn)
        .click(loginBtn)
        .typeText(userName, 'adembalu@gmail.com')
        .typeText(password, "balu")
        .click(sigIn)

}).skipJsErrors();

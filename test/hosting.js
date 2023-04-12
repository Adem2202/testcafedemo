import { Selector, t } from "testcafe";

const cookies = Selector(".button");
const getStarted = Selector("#page-webhosting > div.section.Hero.section-fluidHeight.section-vertical-centered > div > div > div > div > div > div > div:nth-child(3) > span > a > button > div");
const advancePlan = Selector('#HostingPricingTables > div > div > div > div > div > div > div > div.threePlans > div > div:nth-child(1) > div > ul > li:nth-child(2) > div > div.PriceCard > div.CheckoutLink > span > a > button > div');
const domainName = Selector('input[name="search"]');
const searchBtn = Selector('div[class="linearForm-submit linearForm-submit-transparent"]');
const addCart = Selector('button[id="balu.guru"]')
const continueBtn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > div > button > div');
const loginBtn = Selector('span[class="Link login-ctalink"]')
const userName = Selector('input[name="userid"]')
const password = Selector('input[name="passwd"]')
const sigIn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > button > div')


fixture("page")
    .page("https://www.turbify.com/hosting")

test("hosting", async t=>{
    await t
    .maximizeWindow()
    .debug()
    .click(cookies)
    .click(getStarted)
    .click(advancePlan)
    .typeText(domainName,'balu.guru')
    .click(searchBtn)
    .click(addCart)
    .click(continueBtn)
    .click(loginBtn)
    .typeText(userName,'adembalu@gmail.com')
    .typeText(password,"balu")
    .click(sigIn)

    .wait(5000)
    
}).skipJsErrors();
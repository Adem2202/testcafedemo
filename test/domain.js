import { Selector, t } from "testcafe";

const cookies = Selector(".button");
const search = Selector('div[class="input-field"]');
const searchNow = Selector('#page-domains > div.DomainParent.row > div > div > div > div > div.DesktopNonSticky-header > div.DesktopNonSticky-right > div.DesktopNonSticky-SearchBar > div.DesktopNonSticky-search-inputBox-ctaBtn.col-2 > button > div');
const cart = Selector("button[id='balu.guru']");
const continueBtn = Selector('#GlobalFooter > div > div > div.CheckoutStepButton-footer-continueButton > button > div');
const loginbtn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.LoginStep > div.LoginStep-Content > div.LoginStep-Switch > div > span > span');
const userName = Selector('input[name="userid"]');
const password = Selector('input[name="passwd"]');
const sigIn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > button > div')




fixture("page")
    .page("https://www.turbify.com/domains")

test("Domains", async t => {
    await t
        .maximizeWindow()
        .debug()
        .click(cookies)
        .typeText(search, "balu.guru")
        .click(searchNow)
        .click(cart)
        .click(continueBtn)
        .click(loginbtn)
        .typeText(userName, "adembalu2202@gmail.com")
        .typeText(password, "password")
        .click(sigIn)

}).skipJsErrors();



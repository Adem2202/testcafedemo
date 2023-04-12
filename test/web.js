import { Selector, t } from "testcafe";

const cookies = Selector('.button');
const search = Selector('#main-content > div.DomainPortalContainer > div > div.col-12.col-sm-12.col-md-12.col-lg-4.DomainPortalContainer-row-col1 > div > form > div.linearForm-input > div > div.input-container > div > label');
const searchBtn = Selector('#main-content > div.DomainPortalContainer > div > div.col-12.col-sm-12.col-md-12.col-lg-4.DomainPortalContainer-row-col1 > div > form > div.linearForm-submit.linearForm-submit-transparent > button > div > div');
const cart = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div > div.row > div:nth-child(1) > div > div.DomainSearchStep-group.DomainSearchStep-result > div.DomainSearchStep-group-items > div > div.PurchaseItem-add');
const continueBtn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.CheckoutStepButton.CheckoutStepButton-active > div > div > div > div > button > div');
const loginbtn = Selector('#main > div.CheckoutPage > div > div > div.TransitionView-Container.TransitionView-show > div > div.Checkout-flow-column.Checkout-flow-content > div.CheckoutStep.CheckoutStep-active > div > div.CheckoutStep-content > div.LoginStep > div.LoginStep-Content > div.LoginStep-Switch > div > span > span');
fixture("Web Essential")
  .page("https://www.turbify.com");
test
  ('Automation on Web Essentials', async t => {
    //const searchElement = await search.with({visibilityCheck:true})();
    await t
      .maximizeWindow()
      .debug()
      .click(cookies)
      .typeText(search, 'balu.host')
      .click(searchBtn)
      .click(cart)
      .click(continueBtn)
      .click(loginbtn)
      .wait(5000)
  }).skipJsErrors();
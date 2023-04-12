import { Selector } from "testcafe";

const cookies = Selector(".button")
const box1 = Selector("#header-content > div.header-left > div > ul > li:nth-child(1) > span > a")
const box2 = box1.find('a');


fixture("Test on Domains")
.page("https://www.turbify.com/")

test('first test', async t =>{
    await t
    .maximizeWindow()
    .click(cookies)
    .wait(20000)
    .click(box1)
    .click(box2.withText('Domains'))
    .wait(4000)
})
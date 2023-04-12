import { test } from "testcafe";
import homepage from "../pages/Home";

const URL = "https://www.turbify.com/"

fixture("Web Essentials")
    .page(URL);

test('Drop Down', async t => {
    await t
    .click(homepage.Cookies)
    .wait(5000)
    await homepage.SelectDrop('Domains')

})

import { Selector } from "testcafe";

const interfaceSelect = $("#preferred-interface")
const interfaceOptions = interfaceSelect.find('option');


fixture("Select option from dropdown")
.page("https://devexpress.github.io/testcafe/example/")

test('test on dropdown', async t =>{
    await t
    .click(interfaceSelect)
    .click(interfaceOptions.withText('Both'));
})
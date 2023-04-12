import { Selector, t } from "testcafe";

const checkBox = Selector('#tried-test-cafe');
const slider = Selector("#slider");


fixture('drag test')
    .page("https://devexpress.github.io/testcafe/example/")

test("Drag Testcase", async t => {
    await t
        .maximizeWindow()
        .hover("#populate")
        .setTestSpeed(0.01)
        .click(checkBox)
        .drag(slider,360,0,{offsetX:10,offsetY:10})
})
fixture("First Test")
    .page("https://devexpress.github.io/testcafe/")
    /*.afterEach(async t => {
        await t
        .navigateTo('https://www.google.com/')
        .maximizeWindow()
        //.setTestSpeed(0.01)
        //.click('#tried-test-cafe');
    });*/


test
.page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t => {
        await t
            .typeText("#developer-name", "BALU")
            .click("#windows")
            .click("#submit-button")
            .takeScreenshot()
            .wait(6000)
    })


test.page("https://devexpress.github.io/testcafe/example/")
    ("Second Test", async t => {
        await t
            .typeText("#developer-name", "Mahendra")
            .click("#windows")
            //.takeElementScreenshot("#submit-button")
            .click("#submit-button")
            .wait(6000)
    })
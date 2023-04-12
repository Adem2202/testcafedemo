fixture.meta("version","1")("First Fixture")
.page("https://devexpress.github.io/testcafe/");


test.meta('author','balu')
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
    .typeText("#developer-name","BALU")
    .click("#windows")
    .click("#submit-button")
    .wait(6000)
})


test('navigation test', async t =>{
    await t
    .navigateTo("https://www.google.com");
})
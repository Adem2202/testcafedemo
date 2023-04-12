fixture('Navigation Example')
.page('https://devexpress.github.io/testcafe/example/')


test('navigation test', async t =>{
    await t
    .navigateTo("https://www.google.com");
})
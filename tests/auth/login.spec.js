await page.goto(URLS.login);

await loginPage.login(USERS.valid.username, USERS.valid.password);

const {test, expect} = require('../fixtures/testSetup');

test('dashboard aparece', async ({loggedPage}) => {
    await expect(loggedPage.locator('h2')).toBeVisible();
});
const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../../pages/LoginPage');
const {USERS} = require('../../utils/data');

test('login sucesso', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.valid.username,
        USERS.valid.password
    );

    const message = await loginPage.getMessage();

    await expect(message).toContainText('You logged into a secure area!');
});


test('login inválido', async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        USERS.invalid.username,
        USERS.invalid.password
    );

    const message = await loginPage.getMessage();

    await expect(message).toContainText('invalid');
});

test('username vazio', async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('', '');

    const message = await loginPage.getMessage();

    await expect(message).toBeVisible();
});
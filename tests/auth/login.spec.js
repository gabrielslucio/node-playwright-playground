const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../../pages/LoginPage');

test('login sucesso', async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    const message = await loginPage.getMessage();

    await expect(message).toContainText('You logged into a secure area!');
});


test('login inválido', async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login('wrong', 'wrong');

    const message = await loginPage.getMessage();

    await expect(message).toContainText('invalid');
});
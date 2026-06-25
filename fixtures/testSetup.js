const base = require('@playwright/test');

const test = base.test.extend({
    simplePage: async ({ page }, use) => {
        console.log('SETUP: abrir página');

        await page.goto('https://example.com');

        await use(page);

        console.log('TEARDOWN: teste acabou');
    }
});

const expect = base.expect;

module.exports = { text, expect };
const {test, expect} = require('../fixtures/testSetup');

test('test com fixture', async ({ simplePage }) => {
    await expect(simplePage).toHaveTitle(/Example/);
});
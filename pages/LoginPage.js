const { URLS } = require('../constants/urls');



// LoginPage Non Dynamic Locator
/* 
class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(URLS.login);
    }

    async login(user, pass) {
        await this.page.locator('#username').fill(user);
        await this.page.locator('#password').fill(user);

        await this.page.getByRole('button', { name: /login/i }).click();
    }

    async getMessage(){
        return this.page.locator(this.selectors.flash);
    } 
}
*/

// Dynamic Locator
class LoginPage{
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp/login');
    }

    async login(user, pass) {
        // username - fallback para CSS (caso não haja label)
        await this.page.locator('input[name="username"]').fill(user);

        // password
        await this.page.locator('input[name="password"]').fill(pass);

        // botão robusto
        await this.page.getByRole('button', {name: /login/i}).click();
    }

    async getMessage() {
        return this.page.locator('#flash');
    }

}





module.exports = { LoginPage };
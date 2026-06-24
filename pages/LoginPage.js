const { URLS } = require('../constants/urls');


class LoginPage {
    constructor(page) {
        this.page = page;
        this.selectors = {
            username: '#username',
            password: '#password',
            loginBtn: 'button[type="submit"]',
            flash: '#flash'
        };
    }

    async goto() {
        await this.page.goto(URLS.login);
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }

    async getMessage(){
        return this.page.locator(this.flash);
    }
}

module.exports = { LoginPage };
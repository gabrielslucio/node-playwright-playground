class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = "#username";
        this.password = "#password";
        this.loginBtn = 'button[type=submit]';
        this.flash = '#flash';
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
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
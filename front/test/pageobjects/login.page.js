export default class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button1'); }

    async login(username, password) {
        try {
            await this.usernameInput.waitForDisplayed({ timeout: 5000 });
            await this.usernameInput.setValue(username);
        
            await this.passwordInput.waitForDisplayed({ timeout: 5000 });
            await this.passwordInput.setValue(password);
        
            await this.loginButton.waitForClickable({ timeout: 5000 });
            await this.loginButton.click();
        } catch (error) {
            console.error("Error al intentar iniciar sesión:", error);
            throw error; // Lanza el error para que la prueba falle
        }
    }
}


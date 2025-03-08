import LoginPage from '../pageobjects/login.page'; // Importamos la clase, no una instancia
import { expect } from 'chai'; // Uso de expect de Chai

describe('Front Test- SauceDemo-Validación de Inicio de Sesión', () => {
    
    it('CP-001-Iniciar sesión con credenciales validas', async () => {
        await browser.url('/');
        const loginPage = new LoginPage(); // Creamos una instancia de LoginPage
        await loginPage.login('standard_user', 'secret_sauce');
        const url = await browser.getUrl();
        expect(url).to.include('inventory.html', 'El inicio de sesión falló con credenciales correctas');
    });

    it('CP-002-Intentar iniciar sesion con contraseña incorrecta', async () => {
        await browser.url('/');
        const loginPage = new LoginPage(); // Creamos una instancia de LoginPage
        await loginPage.login('standard_user', '123456');
        
        // Esperar a que el mensaje de error sea visible
        const errorMessage = await $('.error-message-container.error');
        await errorMessage.waitForDisplayed({ timeout: 10000 });

        // Obtener y mostrar el mensaje de error en la consola
        const errorText = await errorMessage.getText();
        console.log('Mensaje de error recibido:', errorText); 
        expect(errorText).to.include('Epic sadface: Username and password do not match any user in this service', 'El mensaje de error no es el esperado');
    });

    it('CP-003-Intentar iniciar sesion sin ingresar usuario', async () => {
        await browser.url('/');
        const loginPage = new LoginPage(); // Creamos una instancia de LoginPage
        await loginPage.login('', '123456'); // No ingresamos usuario
        
        // Esperar a que el mensaje de error sea visible
        const errorMessage = await $('.error-message-container.error');
        await errorMessage.waitForDisplayed({ timeout: 10000 });

        // Obtener y mostrar el mensaje de error en la consola
        const errorText = await errorMessage.getText();
        console.log('Mensaje de error recibido:', errorText); 
        expect(errorText).to.include('Epic sadface: Username is required', 'El mensaje de error no es el esperado');
    });

});

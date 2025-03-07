// common/utils/commonMethods.js
class CommonMethods {
    // Espera que un elemento sea visible y esté disponible para interactuar
    async waitForElement(selector, timeout = 5000) {
        const element = await $(selector); // Selecciona el elemento usando el selector
        await element.waitForDisplayed({ timeout }); // Espera hasta que el elemento sea visible
    }
    
    // Toma una captura de pantalla y la guarda con el nombre de archivo proporcionado
    async takeScreenshot(filename) {
        await browser.saveScreenshot(`./screenshots/${filename}.png`); // Guarda la captura en la carpeta ./screenshots/
    }
}

module.exports = new CommonMethods(); // Exporta una instancia de la clase para usarla en otras partes del código

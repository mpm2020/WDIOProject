export const config = {
    runner: 'local',

    specs: [
        './front/test/specs/**/*.js',  // Pruebas de frontend
        './back/test/specs/**/*.js'     // Pruebas de API
    ],

    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'reports/allure-results' }]],
    services: ['chromedriver'],

    baseUrl: 'https://www.saucedemo.com',  // URL del frontend

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] }
    }],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    mochaOpts: {
        timeout: 60000
    },

    // Hook para capturar pantalla si la prueba falla
    afterTest: async function(test, context, { error }) {
        if (error) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `./screenshots/errors/${test.title}-${timestamp}.png`;
            await browser.saveScreenshot(filename);
            console.log(`Captura de pantalla guardada: ${filename}`);
        }
    }
};

# UI API Test Suite

Este proyecto contiene un conjunto de pruebas automatizadas para UI y API.

## Estructura del Proyecto

- `back/` - Pruebas y configuración relacionadas con la parte backend.
- `common/` - Recursos compartidos y utilidades para las pruebas.
- `front/` - Pruebas relacionadas con la parte frontend.
- `node_modules/` - Dependencias del proyecto.
- `reports/` - Reportes generados después de la ejecución de pruebas.
- `screenshots/` - Capturas de pantalla tomadas durante la ejecución de pruebas.
- `package.json` - Archivo de configuración del proyecto y dependencias.
- `package-lock.json` - Archivo de bloqueo de versiones de dependencias.
- `wdio.conf.js` - Archivo de configuración para WebdriverIO.

## Requisitos Previos

- Node.js instalado.
- WebdriverIO instalado.
- Dependencias del proyecto instaladas con `npm install`.

## Ejecución de Pruebas

1. Instalar dependencias:
   ```sh
   npm install
   ```
2. Ejecutar las pruebas:
   ```sh
   npx wdio wdio.conf.js
   ```

## Reportes

Los reportes de ejecución se generan en la carpeta `reports/` y pueden ser consultados después de ejecutar las pruebas.

## Licencia

Este proyecto está bajo mi licencia personal. Todos los derechos reservados.


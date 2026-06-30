# Proyecto Backend: Mi Primer Servidor con Express

Este proyecto es el resultado de mi fase de contextualización en desarrollo backend. El objetivo fue construir un servidor desde cero para entender cómo funciona la comunicación entre un cliente y un servidor, trabajando con peticiones HTTP y formatos de datos JSON.

## ¿Qué aprendí?
* **Entorno de ejecución:** Uso de Node.js para ejecutar JavaScript en el servidor.
* **Gestión de dependencias:** Administración de paquetes con `package.json` y `npm`.
* **Ciclo Petición-Respuesta:** Gestión del flujo entre el cliente (`req`) y el servidor (`res`).
* **Rutas (Endpoints):** Estructuración de servicios mediante rutas específicas (`/`, `/aprendiz`, `/programa`).

## Explicación del Código (`index.js`)

1. **Importación y Configuración:** Utilizamos Express para levantar el servidor en el puerto **8080**.
2. **Rutas (Endpoints):**
    * `/`: Página de bienvenida en texto plano.
    * `/aprendiz`: Información personal.
    * `/programa`: **Respuesta en formato JSON** con los datos de formación.
3. **Configuración de red:** El servidor escucha en `0.0.0.0` para permitir conexiones desde otros dispositivos en la red local.

## Instrucciones para ejecutar

1. **Clonar el repositorio:** `git clone <https://github.com/Santiagoo31/mi-servidor-backend.git>`
2. **Instalar dependencias:** `npm install`
3. **Iniciar el servidor:** `npm start`
4. **Acceder al servidor:**
    * **Localmente:** `http://localhost:8080`
    * **Desde la red local:** `http://10.5.225.138:8080`
    * **Consultar datos en JSON:** `http://10.5.225.138:8080/programa`

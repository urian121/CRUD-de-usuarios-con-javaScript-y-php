# Guía para Crear un CRUD con JavaScript y una API RESTful con PHP y MySQL

Esta es una guía para crear un CRUD con JavaScript y ademas crear una API RESTful básica usando PHP y el gestor de base de datos relacional MySQL. Incluye funcionalidades CRUD completas (Crear, Leer, Actualizar y Eliminar) junto con un frontend en JavaScript para interactuar con la API.

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/CRUD-de-usuarios-con-JavaScript-PHP-y-MySQL.gif)

Esta guía te enseña paso a paso cómo desarrollar un **CRUD completo** (Crear, Leer, Actualizar y Eliminar) utilizando tecnologías esenciales.  

## Descripción

Aprenderás a:  
- Diseñar una **API RESTful básica** utilizando **PHP** y el gestor de bases de datos relacional **MySQL**.  
- Crear un frontend interactivo con **JavaScript** para consumir la API y gestionar datos en tiempo real.  

Este proyecto es ideal para construir aplicaciones funcionales, aprender los fundamentos de la comunicación cliente-servidor y sentar las bases para proyectos más avanzados.

## Características del Proyecto

1. **Backend**:
   - Implementación de una API RESTful básica con PHP.
   - Gestión de una base de datos MySQL para almacenar información.
   - Funcionalidades completas de CRUD:
     - **Crear**: Agregar nuevos registros a la base de datos.
     - **Leer**: Recuperar y listar registros.
     - **Actualizar**: Editar información existente.
     - **Eliminar**: Borrar registros de forma segura.

2. **Frontend**:
   - Interfaz dinámica construida con JavaScript.
   - Consumo de la API RESTful utilizando `fetch` o una librería AJAX.
   - Actualizaciones en tiempo real para reflejar cambios en la interfaz.

## Requisitos

- **PHP** 7.x o superior.
- **MySQL** o MariaDB como base de datos.
- Servidor local (XAMPP, WAMP, Laragon, etc.).
- Navegador moderno compatible con JavaScript.

## Instrucciones

1. **Configurar el servidor**:
   - Instala y configura tu servidor local.
   - Crea una base de datos en MySQL para almacenar los datos.

2. **Construir la API con PHP**:
   - Define los endpoints para cada operación CRUD.
   - Conecta PHP con la base de datos MySQL.

3. **Desarrollar el Frontend con JavaScript**:
   - Diseña una interfaz que permita gestionar los datos (formularios y tablas).
   - Implementa las llamadas a la API para interactuar con el backend.

4. **Probar la aplicación**:
   - Verifica las funcionalidades CRUD desde la interfaz.
   - Asegúrate de que las operaciones se reflejen correctamente en la base de datos.


## Estructura del proyecto

```plaintext
crud-javascript-php/
├── index.html
├── assets/
│   ├── css/
│   ├── js/app.js
├── backend/
│   ├── configBD.php
│   ├── api.php
├── README.md
```

## Lista de Endpoints API

### Método GET (Obtener todos los usuarios) ✅

```plaintext
👉 http://localhost/crud-javascript-php/backend/api.php
```
**Ejemplo de respuesta:**
```json
[
    {
        "id": "1",
        "name": "Urian",
        "email": "urian@gmail.com",
        "age": "35",
        "speak_english": "Si",
        "created_at": "2025-01-13 15:21:48",
        "updated_at": "2025-01-13 15:21:54"
    },
    {
        "id": "2",
        "name": "Brenda",
        "email": "brenda@gmail.com",
        "age": "18",
        "speak_english": "No",
        "created_at": "2025-01-14 15:24:06",
        "updated_at": "2025-01-15 15:24:06"
    }
]
```

### Método GET (Obtener usuario por ID) ✅

```plaintext
👉 http://localhost/crud-javascript-php/backend/api.php?id=1
```
**Ejemplo de respuesta:**
```json
{
    "id": "1",
    "name": "Urian",
    "email": "urian@gmail.com",
    "age": "35",
    "speak_english": "Si",
    "created_at": "2025-01-13 15:21:48",
    "updated_at": "2025-01-13 15:21:54"
}
```

### Método POST (Crear un nuevo usuario) ✅

```plaintext
👉 http://localhost/crud-javascript-php/backend/api.php
```
**Datos de ejemplo:**
```json
{
    "name": "Braudin",
    "email": "braudin@gmail.com",
    "age": "38",
    "speak_english": "No"
}
```
**Ejemplo de respuesta:**
```json
{
    "message": "Nuevo usuario creado correctamente"
}
```

### Método PUT (Actualizar un usuario existente) ✅

```plaintext
👉 http://localhost/crud-javascript-php/backend/api.php?id=3
```
**Datos de ejemplo:**
```json
{
    "name": "Braudin Laya",
    "email": "braudin@gmail.com",
    "age": "38",
    "speak_english": "No"
}
```
**Ejemplo de respuesta:**
```json
{
    "message": "Usuario actualizado correctamente"
}
```

### Método DELETE (Eliminar un usuario por ID) ✅

```plaintext
👉 http://localhost/crud-javascript-php/backend/api.php?id=3
```
**Ejemplo de respuesta:**
```json
{
    "message": "Usuario eliminado correctamente"
}
```

---

## Notas importantes

1. **Configuración de la base de datos:** 
   Asegúrate de configurar correctamente el archivo `configBD.php` con las credenciales de tu base de datos.

2. **Ejecución en un entorno local:** 
   Utiliza un servidor local como XAMPP, WAMP o Laragon para probar la API.

3. **Validación de datos:** 
   Siempre valida los datos enviados al backend para prevenir errores o vulnerabilidades de seguridad.

4. **Pruebas de la API:** 
   Puedes utilizar herramientas como [Postman](https://www.postman.com/) o [cURL](https://curl.se/) para probar los endpoints.

### Para usar la biblioteca Nextjs Toast Notify, simplemente utiliza su integración mediante CDN.

    Visita la página oficial: [nextjstoastnotify.com](https://www.nextjstoastnotify.com/) para obtener documentación y ejemplos prácticos.
    También puedes explorar su paquete en NPM: [nextjs-toast-notify.](https://www.npmjs.com/package/nextjs-toast-notify)

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.
    Y no olvides dejar tu estrella ⭐ en el repositorio...

¡dicen que trae buena suerte! 🍀

## No olvides SUSCRIBIRTE 👍

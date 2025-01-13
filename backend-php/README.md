# API RESTful con PHP desde Cero

# API RESTful con PHP desde Cero

Esta es una guía para crear una API RESTful básica usando PHP y MySQL. Incluye funcionalidades CRUD completas (Crear, Leer, Actualizar y Eliminar) junto con un frontend en JavaScript para interactuar con la API.

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/portada_flask-socketio__chat_urian_viera.PNG)

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


### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.
    Y no olvides dejar tu estrella ⭐ en el repositorio...

¡dicen que trae buena suerte! 🍀

## No olvides SUSCRIBIRTE 👍
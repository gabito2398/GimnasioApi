# API Gimnasio

## Descripción

API REST desarrollada con Node.js, Express y MySQL para la gestión de miembros de un gimnasio.

Permite realizar operaciones CRUD:

* Crear miembros
* Consultar miembros
* Actualizar miembros
* Eliminar miembros

## Tecnologías utilizadas

* Node.js
* Express.js
* MySQL
* XAMPP
* Postman
* GitHub

---

# Requisitos

Instalar:

* Node.js
* Visual Studio Code
* XAMPP
* Postman

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar a la carpeta:

```bash
cd gimnasio-api
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Iniciar XAMPP

Abrir XAMPP y encender:

* Apache
* MySQL

---

## 4. Crear la base de datos

Abrir phpMyAdmin:

http://localhost/phpmyadmin

Ejecutar:

```sql
CREATE DATABASE gimnasio;

USE gimnasio;

CREATE TABLE miembros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    telefono VARCHAR(20),
    correo VARCHAR(100),
    tipo_membresia VARCHAR(50)
);
```

---

## 5. Configurar variables de entorno

Crear archivo .env

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=gimnasio
PORT=3000
```

---

## 6. Ejecutar el proyecto

```bash
npm run dev
```

Resultado esperado:

```text
Base de datos conectada
Servidor activo en puerto 3000
```

---

# Endpoints

Base URL:

```text
http://localhost:3000/api/miembros
```

## Obtener todos los miembros

Método:

```http
GET
```

URL:

```text
http://localhost:3000/api/miembros
```

---

## Obtener miembro por ID

Método:

```http
GET
```

URL:

```text
http://localhost:3000/api/miembros/1
```

---

## Crear miembro

Método:

```http
POST
```

URL:

```text
http://localhost:3000/api/miembros
```

Body JSON:

```json
{
  "nombre": "Ricardo",
  "edad": 22,
  "telefono": "8091234567",
  "correo": "ricardo@gmail.com",
  "tipo_membresia": "Premium"
}
```

---

## Actualizar miembro

Método:

```http
PUT
```

URL:

```text
http://localhost:3000/api/miembros/1
```

Body JSON:

```json
{
  "nombre": "Ricardo Estrella",
  "edad": 23,
  "telefono": "8099999999",
  "correo": "ricardo@gmail.com",
  "tipo_membresia": "VIP"
}
```

---

## Eliminar miembro

Método:

```http
DELETE
```

URL:

```text
http://localhost:3000/api/miembros/1
```

---

# Autor

Gabriel Ortiz


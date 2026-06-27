# Chat Application Notes (Socket.IO)

## Project Structure

Create a root folder containing two folders:

```text
Chat-App/
│
├── frontend/
└── backend/
```

### Tech Stack

**Frontend**

* React
* Vite
* JavaScript

**Backend**

* Node.js
* Express.js
* MongoDB (Database)
* WebSocket API (Socket.IO)

---

# Creating the Frontend

Go inside the frontend folder.

```bash
cd frontend
npm create vite@latest .
```

> `.` means create the Vite project inside the current folder.

### Choose

* Framework → React
* Variant → JavaScript

---

## ESLint vs Oxlint

While creating the Vite project, newer versions ask:

* ESLint
* Oxlint

### ESLint

* Older linter
* JavaScript-based
* Slower
* More configuration

### Oxlint

* Newer linter
* Built using Rust
* Much faster
* Easier to use

**For this project, we selected ESLint.**

---

# Creating the Backend

Go back to the root directory and enter the backend folder.

```bash
cd backend
npm init -y
```

This creates the `package.json` file.

---

# Install Backend Dependencies

Install the required packages:

```bash
npm install express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io
```

### Packages Used

* **Express** → Backend framework
* **Mongoose** → MongoDB ODM
* **dotenv** → Environment variables
* **jsonwebtoken** → JWT Authentication
* **bcryptjs** → Password hashing
* **cookie-parser** → Read cookies
* **Cloudinary** → Image/File storage
* **Socket.IO** → Real-time communication using WebSockets


## Install Nodemon

```bash
npm install nodemon
```

### What is Nodemon?

**Nodemon** is a development tool that automatically restarts your Node.js application whenever you save changes to your files.

Without nodemon:

* Save file
* Stop server (`Ctrl + C`)
* Run server again

With nodemon:

* Save file
* Server restarts automatically ✅

---

## Create Entry File

Create an `index.js` file.

Initialize Express and test it.

```javascript
import express from "express";

const app = express();

console.log("Hello");
```

---

## Update `package.json`

Replace the default `test` script with:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Now start the server using:

```bash
npm run dev
```

### Why use `"dev"`?

`dev` is simply a custom script name.

Instead of typing:

```bash
nodemon index.js
```

every time, you can simply run:

```bash
npm run dev
```

It is mainly used during development because it automatically restarts the server whenever changes are made.

---

# `type` in `package.json`

There are two module systems in Node.js:

* CommonJS (Default)
* ES Modules (Modern)

### CommonJS

Uses:

```javascript
const express = require("express");

module.exports = {};
```

* Older module system
* Uses `require()` and `module.exports`
* Default if `"type"` is not specified

---

### ES Modules (Recommended)

Add this in `package.json`:

```json
"type": "module"
```

Now you can use:

```javascript
import express from "express";

export default app;
```

* Modern JavaScript standard
* Uses `import` and `export`
* Supports top-level `await`
* Preferred for new projects

---

## CommonJS vs ES Modules

| CommonJS           | ES Modules                  |
| ------------------ | --------------------------- |
| `require()`        | `import`                    |
| `module.exports`   | `export`                    |
| Older system       | Modern system               |
| Default in Node.js | Requires `"type": "module"` |

**For this project, we are using:**

```json
"type": "module"
```

---

# Today's Progress

## Step 1: Create Authorization API

Inside `index.js`, create the authorization route.

Example:

```javascript
app.use("/api/auth", authRouter);
```

This means every authentication-related API starts with:

```text
/api/auth
```

---

## Step 2: Create Router

Create a separate router file (for example, `routes/auth.route.js`).

Initialize Express Router.

```javascript
const router = express.Router();
```

Create routes for:

* Signup
* Login
* Logout

Example:

```javascript
router.post("/signup");
router.post("/login");
router.post("/logout");
```

---

## Step 3: Connect Router

Export the router from the router file.

Import it into `index.js` and connect it.

```javascript
app.use("/api/auth", authRouter);
```

Now the APIs become:

```text
POST /api/auth/signup

POST /api/auth/login

POST /api/auth/logout
```

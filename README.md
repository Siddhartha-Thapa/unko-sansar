# 🧶 Unko Sansar

> **Unko Sansar** is a web platform designed for **crochet enthusiasts and crochet business owners**.  
> Business owners get their own **admin panel** to upload products, while buyers can **browse, like, and order** crochet items — just like an e-commerce site for the crochet community.

---

## 📖 Table of Contents
- [✨ Overview](#-overview)
- [⚙️ Tech Stack](#️-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [🚀 Installation & Setup](#-installation--setup)
- [🧭 Usage](#-usage)
- [🧩 Middleware & Utilities](#-middleware--utilities)
- [🤝 Contributing](#-contributing)
- [🪪 License](#-license)

---

## ✨ Overview

**Unko Sansar** connects crochet creators and customers in one platform.  
It allows:
- 🧵 **Business owners** to manage their own crochet shop via an **admin dashboard**  
- 🛍️ **Buyers** to explore, like, and purchase crochet items  
- 🌐 A clean, server-rendered experience using **EJS templates**

This project uses the **MVC pattern** — separating business logic, routing, and UI templates for better scalability and maintainability.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Frontend | EJS (Embedded JavaScript Templates) |
| Database | MongoDB |
| Styling | Tailwind CSS / Custom CSS |
| Tools | Nodemon (for development), npm |
| Architecture | MVC (Model-View-Controller) |

---

## 📁 Folder Structure

unko-sansar/
├── config/ # Configuration files (e.g., DB connection, environment setup)
├── controllers/ # Business logic and route handlers
├── middlewares/ # Custom middlewares (authentication, validation, etc.)
├── models/ # Mongoose models and schemas
├── public/ # Static assets (CSS, JS, images)
│ └── images/
├── routes/ # Route definitions
├── utils/ # Helper / utility functions
├── views/ # EJS templates (frontend pages)
├── app.js # Main server file (entry point)
├── package.json
└── .gitignore



---

## 🚀 Installation & Setup

Follow these steps to set up the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Siddhartha-Thapa/unko-sansar.git
cd unko-sansar

# 2️⃣ Install dependencies
npm install

# 3️⃣ Set up environment variables
# Create a .env file (or edit config files) with:
# MONGO_URI=<your MongoDB connection string>
# PORT=<your desired port>

# 4️⃣ Run the application (with Nodemon)
nodemon app.js
#Once the server starts, visit
👉 http://localhost:PORT

#(replace PORT with your configured port, usually 3000 or 5000).

## 🧭 Usage
#For Admins (Crochet Business Owners)

- Log in to your admin dashboard

- Upload new crochet items with images and descriptions

- Manage or delete existing products

#For Buyers

-Browse all crochet collections

-View product details and add to cart

-Place an order and explore handmade crochet art



🧩 Middleware & Utilities

middlewares/ – Handles authentication, request validation, and error handling

utils/ – Common helper functions for code reuse

config/ – MongoDB connection and environment configuration

🤝 Contributing

Contributions, ideas, and suggestions are always welcome 💡

Fork the repo

Create a feature branch:

git checkout -b feature-name


Commit your changes and push:

git push origin feature-name


Create a pull request

Please ensure your code follows consistent formatting and includes meaningful commit messages.

🪪 License
MIT License

Copyright (c) 2025 Siddhartha Thapa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

💬 Author

Siddhartha Thapa
📍 Nepal
👨‍💻 Passionate about building web applications that connect communities.
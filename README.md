# unko-sansar

## 🚀 Overview
**Unko Sansar** is a web platform designed for **crochet enthusiasts and crochet business owners**.  
Business owners get their own **admin panel** to upload products, while buyers can **browse and order products** crochet items — functioning like a specialized e-commerce site for handmade crochet goods.


### Key Features
- User registration and login
- Admin Creation and login
- Product browsing and ordering
- Shopping cart functionality
- Order placement and tracking
- Admin panel for product owners to manage products

### Who This Project Is For
- Crochet enthusiasts
- Developers looking to build an e-commerce platform
- Product owners who want to manage their products online

## ✨ Features
- User-friendly shopping experience
- Secure user authentication
- Admin panel for product management

## 🛠️ Tech Stack
- **Programming Language:** EJS
- **Frameworks & Libraries:**
  - Express
  - Mongoose
  - Multer
  - bcrypt
  - jsonwebtoken
  - connect-flash
  - cookie-parser
  - express-session
- **Tools:**
  - Tailwind CSS
  - PostCSS
  - Autoprefixer
- **Database:** MongoDB

## 📦 Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (v4 or later)

### Quick Start
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unko-sansar.git
   cd unko-sansar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     EXPRESS_SESSION_SECRET=your_secret_key
     JWT_KEY=your_jwt_key
     MONGODB_URI=mongodb://127.0.0.1:27017/unkosansar
     ```

4. Start the server:
   ```bash
   npm start
   ```

## 🎯 Usage

### Basic Usage
```ejs
// Example of rendering a product list
<% products.forEach(function(product){ %>
  <div class="w-80 h-125 rounded-md shadow-lg">
      <img class="w-80 h-80 rounded-md border-none" src="data:image/jpeg;base64,<%= product.image.toString('base64') %>" alt="">
      <div class="text-white bg-cyan-800 ml-5 h-8 text-center"><%= product.name %></div>
      <div class="flex justify-around text-white bg-cyan-900 ml-5 h-8"><div class="text-sm mt-1 mr-5">Net total</div><div class="text-sm mt-1">Rs <%= product.price - product.discount %></div> </div>
  </div>
<% }) %>
```

### Advanced Usage
- **Admin Panel:** (for product owners)
  - Navigate to `/owners/admin` to manage products.
  - Use the form to create new products and upload images.

## 📁 Project Structure
```
unko-sansar/
├── .gitignore
├── .env
├── app.js
├── config/
│   ├── development.json
│   ├── keys.js
│   ├── multer-config.js
│   └── mongoose-connection.js
├── controllers/
│   └── authController.js
├── middlewares/
│   ├── isLoggedIn.js
│   └── isownerloggedin.js
├── models/
│   ├── owners.js
│   ├── product.js
│   └── user.js
├── routes/
│   ├── index.js
│   ├── ownersRouter.js
│   ├── productsRouter.js
│   └── usersRouter.js
├── utils/
│   └── generateToken.js
├── views/
│   ├── cart.ejs
│   ├── checkout.ejs
│   ├── createproducts.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── loginowner.ejs
│   └── ...
├── package.json
└── package-lock.json
```

## 🔧 Configuration
- **Environment Variables:**
  - `EXPRESS_SESSION_SECRET`: Secret key for express-session.
  - `JWT_KEY`: Secret key for JSON Web Tokens.
  - `MONGODB_URI`: MongoDB connection string.

## 🤝 Contributing
- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes and commit them
- Push your changes to your fork
- Open a pull request

### Development Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unko-sansar.git
   cd unko-sansar
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     EXPRESS_SESSION_SECRET=your_secret_key
     JWT_KEY=your_jwt_key
     MONGODB_URI=mongodb://127.0.0.1:27017/unkosansar
     ```

4. Start the server:
   ```bash
   npm start
   ```


### Pull Request Process
1. Ensure your code is well-tested
2. Write clear and concise commit messages
3. Address any feedback from reviewers

## 👥 Authors & Contributors
- [Siddhartha Thapa](https://github.com/Siddhartha-Thapa)


## 🗺️ Roadmap
- **Planned Features:**
  - Implement user reviews and ratings
  - Add payment gateway integration
  - Improve admin panel UI/UX

- **Future Improvements:**
  - Add mobile responsiveness
  - Implement user notifications
  - Enhance security measures


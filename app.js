const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const db = require('./config/mongoose-connection');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const indexrouter = require('./routes/index');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");
app.use("/", indexrouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter)

app.listen(3000);

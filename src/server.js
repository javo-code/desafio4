import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import viewRouter from './routes/view.router.js';

import "./daos/mongodb/connection.js"

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use('/', viewRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});

console.log(__dirname);
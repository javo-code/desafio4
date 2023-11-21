import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";

const router = Router();

import { productValidator } from "../middleware/productValidator.js";


//MOSTRAR TODOS LOS PRODUCTOS
router.get("/", getAllProducts);

//CREAR PRODUCTO.
router.post("/", productValidator, createProduct);

//MOSTRAR PRODUCTO POR ID.
router.get("/:id", getProductById);

//MODIFICAR PRODUCTO.
router.put("/:id", updateProduct);

//ELIMINAR PRODUCTO.
router.delete("/:id", deleteProduct);

//CREAR PRODUCTO y AGREGAR IMG.
//seguir probando...

export default router;
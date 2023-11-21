import { Router } from "express";
import * as controller from "../controllers/product.controllers.js";


const router = Router();

//MOSTRAR TODOS LOS PRODUCTOS
router.get("/", controller.getAll);

//CREAR PRODUCTO.
router.post("/", controller.create);

//MOSTRAR PRODUCTO POR ID.
router.get("/:id", controller.getById);

//MODIFICAR PRODUCTO.
router.put("/:id", controller.update);

//ELIMINAR PRODUCTO.
router.delete("/:id", controller.remove);

//CREAR PRODUCTO y AGREGAR IMG.
//seguir probando...

export default router;
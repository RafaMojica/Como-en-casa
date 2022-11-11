const express = require("express");
const router = express.Router();
const { Cartas } = require("../models");
const CartasController = require("../controllers/CartasController");
const validateAuth = require("../middleware/auth");

//creo producto
router.post("/", validateAuth, CartasController.postcarta);

//me trae todos los productos
router.get("/", validateAuth, CartasController.getallcartas);

//me trae un producto
router.get("/:id", validateAuth, CartasController.getonecarta);

//me edita un producto
router.put("/:id", validateAuth, CartasController.editonecarta);

//me elimina un producto
router.delete("/:id", validateAuth, CartasController.deleteonecarta);

module.exports = router;

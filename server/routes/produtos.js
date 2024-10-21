import express from "express";
import { getProdutos, createProduto, getProdutoById} from "../controlles/produtos.js";
import { authenticateClient } from "../controlles/cliente.js";

const router = express.Router();

router.get("/", getProdutos);
router.get('/product/:id', getProdutoById);
router.post("/", createProduto);
router.post("/login", authenticateClient); 

export default router;


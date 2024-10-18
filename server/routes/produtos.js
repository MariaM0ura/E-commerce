import express from "express";
import { getProdutos, createProduto, getProdutoById } from "../controlles/produtos.js";

const router = express.Router();

router.get("/", getProdutos);
router.get('/product/:id', getProdutoById);
router.post("/", createProduto);

export default router;


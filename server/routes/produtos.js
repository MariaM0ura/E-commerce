import express from "express";
import { getProdutos, createProduto } from "../controlles/produtos.js";

const router = express.Router();

router.get("/", getProdutos);
router.post("/", createProduto);

export default router;
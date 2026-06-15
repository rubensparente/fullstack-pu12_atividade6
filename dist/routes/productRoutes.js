"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const router = (0, express_1.Router)();
// GET /products - Listagem com filtro por categoria
router.get('/', (req, res) => {
    const { category } = req.query;
    if (category) {
        const filteredProducts = server_1.products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        return res.json(filteredProducts);
    }
    res.json(server_1.products);
});
// GET /products/:id - Consulta específica
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // Validar se ID é negativo
    if (id < 0) {
        return res.status(400).json({ error: 'ID não pode ser negativo' });
    }
    const product = server_1.products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(product);
});
exports.default = router;

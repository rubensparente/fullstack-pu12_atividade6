"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Variáveis globais (melhor passar via server.ts, mas para simplificar)
let localOrders = [];
let nextOrderId = 1;
// POST /orders - Criar pedido
router.post('/', (req, res) => {
    // Validação de body vazio
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Corpo da requisição não pode estar vazio' });
    }
    const { clientName, productIds } = req.body;
    // Validações básicas
    if (!clientName || !productIds || !Array.isArray(productIds)) {
        return res.status(400).json({ error: 'Dados inválidos. Necessário clientName e productIds (array)' });
    }
    const newOrder = {
        id: nextOrderId++,
        clientName,
        productIds,
        status: 'pending',
        createdAt: new Date()
    };
    localOrders.push(newOrder);
    res.status(201).json(newOrder);
});
// PATCH /orders/:id - Atualizar status
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ error: 'Status é obrigatório' });
    }
    const orderIndex = localOrders.findIndex(o => o.id === id);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    localOrders[orderIndex].status = status;
    res.json(localOrders[orderIndex]);
});
// DELETE /orders/:id - Cancelar pedido
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const orderIndex = localOrders.findIndex(o => o.id === id);
    if (orderIndex === -1) {
        return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    localOrders.splice(orderIndex, 1);
    res.status(204).send();
});
exports.default = router;

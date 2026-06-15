import { Router, Request, Response } from 'express';
import { orders } from '../server';
import { CreateOrderBody, UpdateStatusBody } from '../types';

const router = Router();

// Variáveis globais (melhor passar via server.ts, mas para simplificar)
let localOrders: any[] = [];
let nextOrderId = 1;

// POST /orders - Criar pedido
router.post('/', (req: Request<{}, {}, CreateOrderBody>, res: Response) => {
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
    status: 'pending' as const,
    createdAt: new Date()
  };
  
  localOrders.push(newOrder);
  
  res.status(201).json(newOrder);
});

// PATCH /orders/:id - Atualizar status
router.patch('/:id', (req: Request<{ id: string }, {}, UpdateStatusBody>, res: Response) => {
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
router.delete('/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  
  const orderIndex = localOrders.findIndex(o => o.id === id);
  
  if (orderIndex === -1) {
    return res.status(404).json({ error: 'Pedido não encontrado' });
  }
  
  localOrders.splice(orderIndex, 1);
  res.status(204).send();
});

export default router;
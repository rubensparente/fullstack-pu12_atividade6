import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import { loggerMiddleware } from './middlewares/logger';
import { Product, Order } from './types';

const app = express();
const PORT = 3000;

// Dados mockados
export let products: Product[] = [
  { id: 1, name: 'Smartphone', price: 999.99, category: 'eletronicos' },
  { id: 2, name: 'Notebook', price: 2499.99, category: 'eletronicos' },
  { id: 3, name: 'Camiseta', price: 49.99, category: 'roupas' },
  { id: 4, name: 'Livro TypeScript', price: 89.99, category: 'livros' }
];

export let orders: Order[] = [];
let nextOrderId = 1;

// Middlewares globais
app.use(express.json());
app.use(loggerMiddleware);

// Rotas
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.json({
    message: 'API REST com Express e TypeScript',
    endpoints: {
      products: {
        list: 'GET /products',
        filter: 'GET /products?category=xxx',
        find: 'GET /products/:id'
      },
      orders: {
        create: 'POST /orders',
        update: 'PATCH /orders/:id',
        delete: 'DELETE /orders/:id'
      }
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
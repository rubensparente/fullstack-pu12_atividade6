"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = exports.products = void 0;
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const logger_1 = require("./middlewares/logger");
const app = (0, express_1.default)();
const PORT = 3000;
// Dados mockados
exports.products = [
    { id: 1, name: 'Smartphone', price: 999.99, category: 'eletronicos' },
    { id: 2, name: 'Notebook', price: 2499.99, category: 'eletronicos' },
    { id: 3, name: 'Camiseta', price: 49.99, category: 'roupas' },
    { id: 4, name: 'Livro TypeScript', price: 89.99, category: 'livros' }
];
exports.orders = [];
let nextOrderId = 1;
// Middlewares globais
app.use(express_1.default.json());
app.use(logger_1.loggerMiddleware);
// Rotas
app.use('/products', productRoutes_1.default);
app.use('/orders', orderRoutes_1.default);
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

import { Router, Request, Response } from 'express';
import { products } from '../server';
import { ProductQueryParams } from '../types';

const router = Router();

// GET /products - Listagem com filtro por categoria
router.get('/', (req: Request<{}, {}, {}, ProductQueryParams>, res: Response) => {
  const { category } = req.query;
  
  if (category) {
    const filteredProducts = products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filteredProducts);
  }
  
  res.json(products);
});

// GET /products/:id - Consulta específica
router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const id = parseInt(req.params.id);
  
  // Validar se ID é negativo
  if (id < 0) {
    return res.status(400).json({ error: 'ID não pode ser negativo' });
  }
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }
  
  res.json(product);
});

export default router;
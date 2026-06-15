export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface Order {
  id: number;
  clientName: string;
  productIds: number[];
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface CreateOrderBody {
  clientName: string;
  productIds: number[];
}

export interface UpdateStatusBody {
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
}

export interface ProductQueryParams {
  category?: string;
}
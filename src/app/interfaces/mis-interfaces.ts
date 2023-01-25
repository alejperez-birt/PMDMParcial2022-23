export interface Producto {
  id: number;
  titulo: string;
  foto: string;
  valoracion: number;
}

export interface Datos {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
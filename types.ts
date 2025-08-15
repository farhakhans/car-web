export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface Car {
  id: number;
  make: string;
  model:string;
  year: number;
  price: number;
  type: 'Sedan' | 'SUV' | 'Truck' | 'Sports Car' | 'Electric';
  images: string[];
  description: string;
  features: string[];
}

export type Theme = 'light' | 'dark';
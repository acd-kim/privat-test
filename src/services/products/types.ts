export type TProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export type TProductFull = TProduct & {
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

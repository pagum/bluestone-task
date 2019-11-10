import { data, ProductInterface } from './data';

export const getProducts = () =>
  new Promise<ProductInterface[]>(resolve =>
    setTimeout(() => resolve(data), 3000),
  );

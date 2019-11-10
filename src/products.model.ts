import { getProducts } from './products.api';
import { ProductInterface } from './data';

export const productsModel = {
  state: { products: undefined },
  reducers: {
    setProducts(state: any, payload: ProductInterface[]) {
      return {
        ...state,
        products: payload,
      };
    },
  },
  effects: {
    async fetchProducts() {
      await getProducts().then(result =>
        localStorage.setItem('products', JSON.stringify(result)),
      );
    },
  },
};

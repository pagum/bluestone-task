import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { Dispatch } from '../store';
import { MediaCard } from './HomepageCard';
import { ProductsColmun } from './Homepage.style';
import { ProductInterface } from '../data';

interface HomepageProps {
  fetchProducts: any;
}
const Homepage = ({ fetchProducts }: HomepageProps) => {
  const [products, setProducts] = useState<ProductInterface[] | undefined>(
    undefined,
  );
  useEffect(() => {
    fetchProducts();
    const prod = JSON.parse(localStorage.getItem('products')!);

    setProducts(prod);
  }, []);
  return products ? (
    <ProductsColmun>
      {products.map(product => (
        <MediaCard product={product} />
      ))}
    </ProductsColmun>
  ) : (
    <div>no products for you</div>
  );
};
const mapDispatch = (dispatch: Dispatch) => ({
  fetchProducts: dispatch.productsModel.fetchProducts,
});
export default connect(
  null,
  mapDispatch,
)(Homepage);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import { data } from '../data';
import { Dispatch } from '../store';
import { MediaCard } from './HomepageCard';
import { ProductsColmun } from './Homepage.style';

interface HomepageProps {
  fetchProducts: any;
}
const Homepage = ({ fetchProducts }: HomepageProps) => {
  useEffect(() => {
    const prod = fetchProducts();
    console.log(prod);
  }, []);
  return (
    <ProductsColmun>
      {data.map(product => (
        <MediaCard product={product} />
      ))}
    </ProductsColmun>
  );
};
const mapDispatch = (dispatch: Dispatch) => ({
  fetchProducts: dispatch.productsModel.fetchProducts,
});
export default connect(
  null,
  mapDispatch,
)(Homepage);

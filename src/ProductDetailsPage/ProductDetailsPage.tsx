import React, { useEffect, useState } from 'react';
import { ProductInterface } from '../data';

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    const products = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products')!)
      : [{}];
    const productInfoArray = window.location.pathname.split('/');
    const productName = productInfoArray[productInfoArray.length - 1];
    const product =
      products &&
      products.filter((prod: ProductInterface) => prod.name === productName);

    setProduct(product);
  }, []);

  return <div>details</div>;
};

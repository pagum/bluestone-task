import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { ProductInterface, ImageInterface } from '../data';

import {
  ProductColumn,
  SaveButton,
  ProductDetail,
  StyledImage,
} from './ProductDetailsPage.style';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

export const ProductDetailsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductInterface | undefined>(
    undefined,
  );
  const [images, setImage] = useState<ImageInterface[] | undefined>(undefined);
  useEffect(() => {
    const products = localStorage.getItem('products')
      ? JSON.parse(localStorage.getItem('products')!)
      : [{}];
    const productInfoArray = window.location.pathname.split('/');
    const productName = productInfoArray[productInfoArray.length - 1];
    const product =
      products &&
      products.filter((prod: ProductInterface) => prod.name === productName)[0];

    setProduct(product);
    product && setImage(product.images);
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value, id } = event.currentTarget;

    const changeImage = () => {
      images![Number(id)]['name'] = value;
      setImage(images);
    };
    !isNaN(Number(id))
      ? changeImage()
      : setProduct({ ...(product as ProductInterface), [name]: value });
  };
  const saveChanges = () => {
    const products = JSON.parse(localStorage.getItem('products')!);
    const newProducts = products.map((prod: ProductInterface) =>
      prod.name === product!.name ? product : prod,
    );
    localStorage.setItem('products', JSON.stringify(newProducts));
  };
  return (
    <ProductColumn>
      {product ? (
        <>
          <ProductDetail
            required
            disabled
            id="standard-required"
            label="Name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
          />
          <ProductDetail
            required
            id="standard-required"
            label="Number"
            name="number"
            value={product.number}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
          />
          <ProductDetail
            required
            id="standard-required"
            label="Description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
            multiline
          />

          {product.images.map((image, index) => (
            <>
              <ProductDetail
                required
                label={`Name ${index + 1}`}
                value={image.name}
                id={index.toString()}
                name="name"
                className={classes.textField}
                margin="normal"
                onChange={handleInputChange}
              />
              <ProductDetail
                required
                name="url"
                label={`URL ${index + 1}`}
                value={image.url}
                id={index.toString()}
                className={classes.textField}
                onChange={handleInputChange}
                margin="normal"
              />
              <StyledImage>
                <img src={image.url} alt={`product image ${index + 1}`} />
              </StyledImage>
            </>
          ))}
          <SaveButton onClick={saveChanges} color="secondary">
            Save changes
          </SaveButton>
        </>
      ) : (
        <>no info for you</>
      )}
    </ProductColumn>
  );
};

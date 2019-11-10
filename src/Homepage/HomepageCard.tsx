import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ProductInterface, ImageInterface } from '../data';
import { ProductCard, ProductImage } from './Homepage.style';

interface MediaCardInterface {
  product: ProductInterface;
}
export const MediaCard = ({ product }: MediaCardInterface) => {
  const prepareImage = (product: ProductInterface) => {
    return product.images.length > 0 ? (
      <ProductImage
        image={product.images[0].url}
        title={product.images[0].name}
      />
    ) : (
      <ProductImage
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_Afghanistan_%281880%E2%80%931901%29.svg/2000px-Flag_of_Afghanistan_%281880%E2%80%931901%29.svg.png"
        title={product.number}
      />
    );
  };
  return (
    <ProductCard onClick={e => console.log('fffff')}>
      <CardActionArea>
        {prepareImage(product)}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.number.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ProductCard>
  );
};

import styled from 'styled-components';
import { Card, CardMedia } from '@material-ui/core';

export const ProductsColmun = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCard = styled(Card)`
  align-self: center;
  margin: 10px;
  width: 60%;
`;

export const ProductImage = styled(CardMedia)`
  height: 140px;
`;

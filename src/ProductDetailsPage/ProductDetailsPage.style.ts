import styled from 'styled-components';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductDetail = styled(TextField)`
  min-width: 500px !important;
  align-self: center;
`;

export const SaveButton = styled(Button)`
  min-width: 48px;
  max-width: 200px;
  align-self: center;
`;

export const StyledImage = styled.div`
 min-width: 500px
  align-self: center;
  text-align:center;
  background-image: linear-gradient(gray,gray);

`;

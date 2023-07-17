import { Box, Typography , styled} from '@mui/material'
import React from 'react';
import { useState, useEffect } from 'react';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

const TotalAmount = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    border-top: 1px dashed #e0e0e0;
    padding: 20px 0;
    border-bottom: 1px dashed #e0e0e0;
`;

const Discount = styled(Typography)`
    font-size: 16px; 
    color: green;
`

export default function TotalView({cartItems}) {
  const [price , setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
}, [cartItems]);

  const totalAmount = () => {
      let price = 0, discount = 0;
      cartItems.map(item => {
          price += item.price.mrp;
          discount += (item.price.mrp - item.price.cost);
      });
      setPrice(price);
      setDiscount(discount);
  }
   return (
    <Box>
      <Header>
        <Heading>Price Detail</Heading>
      </Header>
      <Container>
        <Typography>Price ({cartItems?.length} item)
          <Price component="span">Rs {price}</Price>
        </Typography>
        <Typography>Discount
          <Price component="span">-Rs {discount}</Price>
        </Typography>
        <Typography>Delivery Charges
          <Price component="span">Rs 20</Price>
        </Typography>
        <Typography>Total Amount
          <Price component="span">Rs {price - discount + 40}</Price>
        </Typography>
        <Typography>You will save Rs {discount - 40} on this order!</Typography>
      </Container>
    </Box>
  )
}

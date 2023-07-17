import { Typography, Box,styled } from '@mui/material'
import React from 'react';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;
const Image = styled('img')({
    width: '15%'
});



export default function EmptyCart() {
    const imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwA6lJzjxTVhVJRtear5nDtl3GmXEPwpB6g&usqp=CAU"
  return (
    <Component>
        <Container>
        <img src={imgurl} alt="empty" />
            <Typography>Your cart is empty !!</Typography>
            <Typography>Add items now</Typography>
        </Container>
    </Component>
  )
}

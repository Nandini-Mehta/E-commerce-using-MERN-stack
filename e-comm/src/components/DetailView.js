import {useEffect} from 'react'

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';  
import { getProductDetail } from '../redux/actions/productAction';
import { Box, Typography, Grid, styled } from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView =()=> {

    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading, product} = useSelector(state => state.getProductDetail)

    useEffect(()=>{
      if(product && id!==product.id)
        dispatch(getProductDetail(id))
    }, [dispatch, id, product, loading])

    console.log(product);
  return (
    <Component>
      {
        loading && product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography>
                <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
            </Typography>
            <ProductDetail product={product} />
            </RightContainer>
        </Container>
      }
    </Component>
  )
}
export default DetailView;
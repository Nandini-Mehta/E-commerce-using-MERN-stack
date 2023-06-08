import React from 'react'
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import SlideItems from '../components/SlideItems';
import BannerSection from '../components/BannerSection';



export default function Home() {

  const { products } = useSelector(state =>state.getProducts);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Box style={{marginTop: '54px'}}>
        <Categories />
        <Slider />
        <SlideItems products={products}/>
        <SlideItems products={products}/>
        <SlideItems products={products}/>
        <SlideItems products={products}/>
        <BannerSection />
      </Box>
    </>
  )
}

import React from 'react'
import Carousel from 'react-multi-carousel';
import { SliderData } from '../constants/data';
import "react-multi-carousel/lib/styles.css";
import {styled} from '@mui/material';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Image = styled('img')({
    width: '100%',
    height: '100%'
  })

  const Banner = styled(Carousel)`
    width: 95%;
    height: 400px;
    margin: auto;
    margin-bottom: 30px;
  `

export default function Slider() {
  return (
    <Banner responsive={responsive} 
    autoPlay={true} autoPlaySpeed={3000} swipeable={false}
    draggable={false} infinite={true} showDots={true} 
    dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
    {
        SliderData.map(d=>(
            <Image src={d.url} key={d.id} alt="banner"/>
        ))
    }
    </Banner>
  )
}

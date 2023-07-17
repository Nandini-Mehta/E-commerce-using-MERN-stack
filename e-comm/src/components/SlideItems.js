import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,Typography, Button,Divider, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Component = styled(Box)`
  ${'' /* background-color:red; */}
  width:95%;
  margin: auto;
`

const Arrival = styled(Box)`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const Text = styled(Typography)`
    font-weight:600;
    font-size: 20px;
`

const Image = styled('img')({
  width:'auto',
    height:150
})
const Info = styled(Typography)`
    padding-top:9px;
    font-size: 14px;
`


const SlideItems = ({products}) => {
  
  return (
    <Component>
      <Arrival>
        <Text>New Arrival</Text>
        <Button variant="contained">View All</Button>
      </Arrival>
      <Divider />
      <Carousel 
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      centerMode={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
      {
        products?.map((product) => (
          <Link to={`product/${product.id}`} style={{textDecoration:'none'}} key={product.id} >
            <Box textAlign="center" style={{ padding: '25px 15px'}} >
              <Image src={product.url} alt='img'/>
              <Info style={{fontWeight:'bold'}}>{product.title.shortTitle}</Info>
              <Info style={{fontWeight:'bold', color:'green'}}>{product.discount}</Info>
              <Info>{product.tagline}</Info>
            </Box>
          </Link>
          
        ))
        
      }
      </Carousel>
    </Component>
  )
}

export default SlideItems;

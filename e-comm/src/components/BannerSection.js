import React from 'react';
import { BannerData } from '../constants/data';
import { Grid} from '@mui/material';

const BannerSection = () => {
  return (
    <Grid lg={12} sm={12} md={12} xs={12} container>
        {
            BannerData.map((image) =>(
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <img src={image.url} alt="img" style={{width: '100%'}} key={image.id}/>
              </Grid>
            ))
        }
    </Grid>
  )
}

export default BannerSection;

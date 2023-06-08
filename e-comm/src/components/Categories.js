import React from 'react'
import {Box, Typography, styled} from '@mui/material';
import { CategoriesData } from '../constants/data';

const Component = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 30px 200px 20px 200px;
`
const SubComponent = styled(Box)`
    margin: 30px 0px 0px 0px;
    text-align: center;
`
const Text = styled(Typography)`
    font-size: 12px;
    font-weight: bold;
`

export default function Categories() {
  return (
    <Component>
        {
            CategoriesData.map(d=>(
                <SubComponent key={d.id}>
                    <img src={d.url} alt="alt" style={{width: '70px',height: '70px'}} />
                    <Text>{d.text}</Text>
                </SubComponent>
            ))
        }
    </Component>
  )
}

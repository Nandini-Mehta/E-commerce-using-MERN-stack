import React, { useState } from 'react'
import { Box, Typography ,Menu, MenuItem } from '@mui/material';


export default function Profile({account, setAccount}) {

    const [open , setOpen] = useState(false);

    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    const logout = ()=>{
      setAccount('');
    }

  return (
    <>
        <Box onClick={handleClick}><Typography style={{cursor: 'pointer'}}>{account}</Typography></Box>
        <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                >
                <MenuItem onClick={()=>{handleClose(); logout();}}>Logout</MenuItem>
        </Menu>
    </>
  )
}

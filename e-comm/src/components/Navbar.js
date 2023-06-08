import React, { useContext } from 'react';
import {AppBar , Toolbar,InputBase, styled, Box, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './LoginDialog';
import { useState } from 'react';
import { DataContext } from '../context/DataProvider';
import Profile from './Profile';


const Stylednav = styled(AppBar)`
  margin-top: 0px;
  background: #621e62;
  justify-content: center;
  height:54px;
`;
const NewToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
const NewBox = styled(Box)`
  display: flex;
`;
const SearchContainer = styled(Box)`  
  margin-left: 4px;
  display: flex; 
  background: white;
  padding-left:20px;  
`;
const InputSearch = styled(InputBase)`
    width: 100%;
    margin-left: 15px;
`
const Icon = styled(SearchIcon)`
  color: black;
  font-size: 30px;
`;

const Logo = styled(Box)`
  width: 40px;
  height:40px;
  display:flex;
  border-radius: 1rem;
`;
const NewButton = styled(Button)`
  background-color: #ecb3ff;
  color: black;
  text-decoration: none;
  margin-right: 15px;
`;

export default function Navbar(){
  const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaq76jHkq_FeAOeSdTtN6v4KuowZznnL4huyeURqe3A&s";

  const [open, setOpen] = useState(false);
  const {account , setAccount} = useContext(DataContext);


  const openDialog = ()=>{
    setOpen(true);
  }

  return (
    <>
        <Stylednav>
          <NewToolbar>
            <NewBox>
              <Logo>
                <img src={logo} alt='im'></img>
              </Logo>
              <SearchContainer>
                  <InputSearch autoFocus={true} placeholder="Search any product..."/> 
                  <Icon />
              </SearchContainer>
            </NewBox>
            <NewBox>
              {
                account? <Profile account = {account} setAccount={setAccount}/>
                : 
                <NewButton variant='contained' onClick={()=> openDialog()}>Login</NewButton>
              }
              <ShoppingCartIcon />
            </NewBox>
            
            <LoginDialog open={open} setOpen={setOpen}/>
          </NewToolbar>
        </Stylednav>
    </>
  );
};

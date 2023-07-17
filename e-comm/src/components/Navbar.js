import React, { useContext } from 'react';
import {AppBar , Toolbar,InputBase, styled, Box, Button,List, ListItem, Badge, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './LoginDialog';
import { useState , useEffect} from 'react';
import { DataContext } from '../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../redux/actions/productAction'


const Stylednav = styled(AppBar)`
  background: #621e62;
  justify-content: center;
  height:54px;
  position: sticky;
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

const ListWrapper = styled(List)`
  position: absolute;
  background-color: white;
  color: black;
  margin-top: 43px;
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export default function Navbar(){
  const logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaq76jHkq_FeAOeSdTtN6v4KuowZznnL4huyeURqe3A&s";

  const [open, setOpen] = useState(false);
  const {account , setAccount} = useContext(DataContext);
  const [text, setText] = useState('');
  const {products} = useSelector(state=> state.getProducts);

  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

  const openDialog = ()=>{
    setOpen(true);
  }

  const getText=(text)=>{
    setText(text);
  }

  return (
    <>
        <Stylednav>
          <NewToolbar>
            <NewBox>
            <Link to='/'>
               <Logo>
                <img src={logo} alt='im'></img>
              </Logo>
            </Link>
             
              <SearchContainer>
                  <InputSearch autoFocus={true} placeholder="Search any product..."
                    onChange={(e)=> getText(e.target.value)} value={text}
                  /> 
                  <Icon />
                  {
                    text && 
                      <ListWrapper>
                        {
                          products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(p=>(
                            <ListItem>
                            <Link to={`product/${p.id}`} 
                            onClick={()=>setText('')}
                            style={{textDecoration:'none', color:'inherit'}}>
                              {p.title.longTitle}
                            </Link>
                            </ListItem>
                          ))
                        }
                      </ListWrapper>
                  }
              </SearchContainer>
            </NewBox>
            <NewBox>
              {
                account? <Profile account = {account} setAccount={setAccount}/>
                : 
                <NewButton variant='contained' onClick={()=> openDialog()}>Login</NewButton>
              }
              <CartLink to="/cart">
                <Badge badgeContent={cartItems?.length} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
                 <Typography>My Cart</Typography>
              </CartLink>
              
            </NewBox>
            
            <LoginDialog open={open} setOpen={setOpen}/>
          </NewToolbar>
        </Stylednav>
    </>
  );
};

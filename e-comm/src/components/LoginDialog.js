import React from 'react'
import { Box, Dialog, Typography } from '@mui/material';
import styled from "styled-components";
import { useState , useContext} from 'react';
import { authenticateSignup , authenticateLogin} from '../service/api';
import {DataContext} from '../context/DataProvider';


const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 50px 30px 50px;
`;

const Title = styled(Typography)`
  text-align: center;
font-size: 30px;
  font-weight: bold;
  margin-right: 30px;
`;
const LoginForm = styled.form`
    display: flex;
  flex-direction: column;
`;
const SignupForm = styled.form`
    display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
      flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px; 

`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  margin: 10px 0px; 
  background-color: teal;
`;

const SignupButton = styled(Typography)`
  cursor: pointer;
  font-weight: bold;
  color: teal;
`;

const Agreement = styled.span`
      font-size: 12px;
  margin: 20px 0px;
`;
const Error = styled(Typography)`
  font-size: 11px;
  color: red;
  margin-top: 5px;
`;

const accountInitial = {
  login: {
    view: 'login'
  },
  signup:{
    view: 'signup'
  }
}

const loginInitialValues = {
  email: '',
  password: '',
};

const signupInitialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};



export default function LoginDialog({open, setOpen}) {

  const [account, toggleAccount] = useState(accountInitial.login);
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState(false);
  const {setAccount} = useContext(DataContext);
  const handleClose=()=>{
     setOpen(false);
     toggleAccount(accountInitial.login);
     setError(false);
  }

  const togglesignup= (e)=>{
    toggleAccount(accountInitial.signup);
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  }


  const signupUser = async() => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
  }
  
const loginUser = async() => {
  let response = await authenticateLogin(login);
  console.log(response);
  if(response.status===200) {
      handleClose();
      setAccount(response.data.data.firstname);
  }
  else{
    setError(true);
  }

}

  return (
    <Dialog open={open} onClose={handleClose}>
    {
      account.view==='login' ?
      <Wrapper>
        <Title>SIGN-IN</Title>
            <LoginForm>
                <Input placeholder="Enter E-mail" onChange={(e) => onValueChange(e)} name='email' />
                <Input placeholder="Enter Password" onChange={(e) => onValueChange(e)} name='password' />
                {error && <Error>Please enter valid Email or Password!</Error> }
                <Button type="button" onClick={()=>loginUser()}>LOGIN</Button>
                <Typography>DO NOT YOU HAVE ACCOUNT ?</Typography>
                <SignupButton type="button" onClick={()=> togglesignup()}>CREATE ACCOUNT HERE!</SignupButton>
            </LoginForm>
        </Wrapper>
      :
      <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <SignupForm>
                <Input placeholder="first name" onChange={(e) => onInputChange(e)} name='firstname' />
                <Input placeholder="last name" onChange={(e) => onInputChange(e)} name='lastname' />
                <Input placeholder="e-mail" onChange={(e) => onInputChange(e)} name='email' />
                <Input placeholder="password" onChange={(e) => onInputChange(e)} name='password' />
                <Input placeholder="confirm password" onChange={(e) => onInputChange(e)} name='confirmPassword' />
                <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type="button" onClick={()=> signupUser()}>CREATE</Button>
            </SignupForm>
        </Wrapper> 
    }
        
    </Dialog>
  )
}

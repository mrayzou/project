import { Box, Button, CircularProgress, TextField } from '@mui/material'
 import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../JS/actions/user'
import { useNavigate } from 'react-router-dom'
 
export default function RegisterUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [newUser,setNewUser] = useState({})
    const handlechange =(e) => {
    setNewUser({...newUser , [e.target.name] : e.target.value})
}
const loadUser =useSelector(state=> state.userReducer.loadUser)
const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(newUser,navigate))
}
  return (
    <div>
<h1 style={{textAlign : 'center'}}>Register</h1>
    <Box
component="form"
sx={{
        '& > :not(style)': { m: 1, width: '25ch' }, 
        display : "flex" , justifyContent : "center", alignItems : "center",m : "auto", flexDirection : "column"
    }}
    noValidate
    autoComplete="off"
    >
        <TextField id="standard-basic" onChange={handlechange} name='firstName' label="firstame" variant="standard" />
        <TextField id="standard-basic" onChange={handlechange} name='name' label="name" variant="standard" />

        <TextField id="standard-basic" onChange={handlechange} name='email' label="email" type='email' variant="standard" />
        <TextField id="standard-basic" onChange={handlechange} name='password' label="password" type='password' variant="standard" />
        {loadUser? (
        <Button variant="contained" onClick={handleRegister}>
            <CircularProgress/>
            Sign up
            </Button>
            ) : (
<Button variant="contained" onClick={handleRegister}>
<CircularProgress/>
Sign up
</Button>
)}
    </Box>
    </div>
);
}

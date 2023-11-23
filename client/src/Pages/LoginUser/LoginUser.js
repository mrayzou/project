import { Box, Button, TextField } from '@mui/material'
import React  from 'react'
export default function LoginUser() {

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
        
        <TextField id="standard-basic" label="email" type='email' variant="standard" />
        <TextField id="standard-basic" label="password" type='password' variant="standard" />
        <Button variant="contained">Sign in</Button>

    </Box>
    </div>
  )
}
 
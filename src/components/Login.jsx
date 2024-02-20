import { Button, TextField, Typography} from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br/><br></br>
        <h1>Login page</h1>
        <input placeholder='username' />
        <br/><br/>
        <input placeholder='password' />
        <br/><br/>
        <button>Submit</button> 
        <br /><br /><br /><br />
        <Typography variant='h1'>Login page</Typography>
        <br /><br />
        <TextField variant='outlined' label='username'/>
        <br /><br />
        <TextField variant='filled'label='password'/>
        <br /><br />
        
        <TextField variant='standard'label='Email'/>
        <Button variant='text'>Text</Button>
    </div>
  )
}

export default Login
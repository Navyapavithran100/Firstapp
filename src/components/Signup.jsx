import {TextField, Typography,Button} from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData] = useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div>
        <h1>Sign up Form</h1>
        <TextField variant='outlined' label='username' name='fname' onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='filled'label='password' name='password'onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='standard'label='Email'  name='email' onchange={inputHandler}/>
        <br /><br />

        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup

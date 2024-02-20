import { Typography,Button,TextField} from '@mui/material'
import React,{useState} from 'react'

const Useeffect = () => {
    
    var [x,setData]=useState();
    const Input=()=>{
        setData("react");
    }
    const inp2=()=>{

    setData("Angular");
    }
    const inp3=()=>{
        setData("Next");
    }

  return (
    <div>
        <br /><br /><br />
      <Typography> Welcome to{x}</Typography>
      <br /><br /><br /><br />
      <Button variant='contained' color='primary'onClick={Input}>react</Button>&nbsp;
      <Button variant='contained' color='secondary'onClick={inp2}>Angular</Button>&nbsp;
      <Button variant='contained' color='success'onClick={inp3}>Next</Button>

    </div>
  )
}

export default Useeffect


import { Button ,TextField} from '@mui/material';
import React,{useState} from 'react';


const Listname = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,SetData]=useState("");
    const inputHandle=(e)=>{
        console.log("on")
        SetData(e.target.value)
        console.log("inp",data)
    }
    const add=()=>{
        console.log("c")
        setInp([...inp,data]);
        console.log("sub",inp)
        SetData("");
    }
  return (
    <div style={{marginTop:"50px"}}>
        <TextField variant='outlined' label='enter your Name' onChange={inputHandle} value={data}/>
      <br /><br />
      <Button variant='contained' onClick={add}>Submit</Button>
      <ul>{
        
       
            inp.map((v,i)=>{
                return<li key={i}>{v}</li>
            }
  )
        }

</ul>
    </div>
  )
}
 
export default Listname

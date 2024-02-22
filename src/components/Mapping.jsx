import { TableBody, TableCell, TableContainer, TableHead, TableRow,Table,TextField,Button} from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[data,setData] = useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
    var[names,setNames]=useState(
        
        [
            {name:"Tiya","age":18},
            {name:"Navya","age":20},
            {name:"Diya","age":19},
            {name:"Ardra","age":22},


            
        ]
    )
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'red',fontFamily:'cursive', fontSize:'50px'}}>Names</TableCell>
                    <TableCell style={{color:'red',fontFamily:'cursive', fontSize:'50px'}}>Age</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                
                
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.age}</TableCell>
                            </TableRow>
                        )
                    })}
                   
                </TableBody>
        </Table>
      </TableContainer>
      <br /><br /><br /><br />

      <TextField variant='outlined' label='username' name='fname' onchange={inputHandler}/>
      <br /><br /><br />
      <Button variant='contained'>Submit</Button>
    </div>
  )
    
                }
export default Mapping

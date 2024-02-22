import { Grid, TextField} from '@mui/material'
import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const Gridget = () => {
    var[Products,setProducts]= useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{ 
            console.log(response) 
            setProducts(response.data)
        })
        .catch((error)=>{console.log(error)})
    },[])
  return (
   <div style={{margin:"4%"}}>
    <Grid container spacing={2}>
    {Products.map((val,i)=>{
        return(
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxwidth:345}}>
                    <CardMedia 
                    sx={{height:140}}
                     image={val.image}
                     title="green iguana"
                   />
                   <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       Lizard
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                       Lizards are a widespread group of squamate reptiles, with over 6,000
                       species, ranging across all continents except Antarctica
                     </Typography>
                   </CardContent>
                   <CardActions>
                     <Button size="small">Share</Button>
                     <Button size="small">Learn More</Button>
                   </CardActions>
                   </Card>
</Grid>
        
    )})}
    </Grid>

</div>
  )
}

export default Gridget

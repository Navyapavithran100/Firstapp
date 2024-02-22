import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}>
      <AppBar position='static'>
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left' variant h6>App</Typography>
            <Button>
                <Link to='/' style={{color:'white'}} >Login</Link>
                </Button>
                <Button>
                <Link to='/sign' style={{color:'white'}} >signup</Link>
                </Button>
                <Button>
                <Link to='/C' style={{color:'white'}} >counter</Link>
                </Button>
                <Button>
                <Link to='/t' style={{color:'white'}} >Table</Link>
                </Button>
                <Button>
                <Link to='/b' style={{color:'white'}} >Listname</Link>
                </Button>
                <Button>
                <Link to='/k' style={{color:'white'}} >Api</Link>
                </Button>
                <Button>
                <Link to='/n' style={{color:'white'}} >Gridget</Link>
                </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

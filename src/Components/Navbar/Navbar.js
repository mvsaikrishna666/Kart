import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../Assets/logo.png'
import useStyles from './Navbarstyles'

const Navbar = (props) => {
    const classes=useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="kart" height="25px" className={classes.image}/>
                        Kart
                    </Typography>
                    <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton color="inherit">
                        <Badge badgeContent={props.totalitems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>

                </Toolbar>
               
            </AppBar>
        </div>
    )
}

export default Navbar

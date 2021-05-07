// import React from 'react'
// import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
// import {ShoppingCart} from '@material-ui/icons'
// import logo from '../../Assets/logo.png'
// import useStyles from './Navbarstyles'

// const Navbar = (props) => {
//     const classes=useStyles();
//     return (
//         <div>
//             <AppBar position="fixed" className={classes.appbar} color="inherit">
//                 <Toolbar>
//                     <Typography variant="h6" className={classes.title}>
//                         <img src={logo} alt="kart" height="25px" className={classes.image}/>
//                         Kart
//                     </Typography>
//                     <div className={classes.grow}/>
//                 <div className={classes.button}>
//                     <IconButton color="inherit">
//                         <Badge badgeContent={props.totalitems} color="secondary">
//                             <ShoppingCart/>
//                         </Badge>
//                     </IconButton>
//                 </div>

//                 </Toolbar>
               
//             </AppBar>
//         </div>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../Assets/logo.png'
import useStyles from './Navbarstyles'


const Navbar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Kart
          </Typography>
          <div className={classes.grow} />
          {!(location.pathname === '/cart') && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default Navbar;
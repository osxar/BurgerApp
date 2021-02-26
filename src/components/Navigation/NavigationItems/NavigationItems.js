import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/"  active >Burger Builder</NavigationItem> 
        <NavigationItem link="/"  >Checkout</NavigationItem> 
    </ul>
); // 'active' is a boolean prop so it can be passed this way

export default navigationItems;
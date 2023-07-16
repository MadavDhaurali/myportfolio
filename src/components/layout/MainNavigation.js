import React from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';

const MainNavigation = () => {
    const favouriteCtx =useContext(FavouritesContext)
  return (
    <header className={classes.header}>
       
    <div className={classes.logo}>Dhaurali</div>
    <div >
    <nav>
        <div className={classes.navbar_container}>
        <ul>
            <li>
                <Link to='/'>Allmeetup</Link>
            </li>
            <li>
                <Link to='/new-meetup'>Addmeetup</Link>
            </li>
            <li>
                <Link to='/favourites'>Favourites<span className={classes.badge}>{favouriteCtx.totalFavourites}</span></Link>
            </li>
        </ul>
        </div>
    </nav>
    </div>
    </header>
  )
}

export default MainNavigation;
import React from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';

const MainNavigation = () => {
    const favouriteCtx =useContext(FavouritesContext)
  return (
    <header className={classes.header}>
    <div className={classes.logo}>ReactMeetups</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>Allmeetup</Link>
            </li>
            <li>
                <Link to='/new-meetup'>Add new meetup</Link>
            </li>
            <li>
                <Link to='/favourites'>My Favourites<span className={classes.badge}>{favouriteCtx.totalFavourites}</span></Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainNavigation;
import React from 'react';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
    <div>ReactMeetups</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>Allmeetup</Link>
            </li>
            <li>
                <Link to='/new-meetup'>Add new meetup</Link>
            </li>
            <li>
                <Link to='/favourites'>My Favourites</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default MainNavigation;
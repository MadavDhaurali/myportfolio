import React from 'react';
import { useContext } from 'react';
import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const favouriteCtx =useContext(FavouritesContext);
  let content;
  if (favouriteCtx.totalFavourites ===0){
    content = <p>You got no favourites</p>
  }else{
    content =  <MeetupList meetups ={favouriteCtx.favourites}/>
  }
  return (
    <section>
      <h1>My Favourite</h1>
      {content}
    </section>
  )
}

export default FavoritesPage;
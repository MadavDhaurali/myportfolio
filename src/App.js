import {Route, Routes} from 'react-router-dom';
import AllMeetups from "./pages/AllMeetups";
import NewMeetupPages from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favourites";
import MainNavigation from './components/layout/MainNavigation';
function App() {
  return  ( 
    <div>
          <MainNavigation/>
          <Routes>
            <Route path="/" element={<AllMeetups />}></Route>
            <Route path="/new-meetup" element={<NewMeetupPages/>}></Route>
            <Route path="/favourites" element={<FavoritesPage/>}></Route>
          </Routes> 
          
  
    </div>

  )
  
}
export default App;
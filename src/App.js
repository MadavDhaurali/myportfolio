import {Route, Routes} from 'react-router-dom';
import AllMeetups from "./pages/AllMeetups";
import NewMeetupPages from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favourites";
function App() {
  return  ( 
    <div>
  
          <Routes>
            <Route path="/" element={<AllMeetups />}></Route>
            <Route path="/new-meetup" element={<NewMeetupPages/>}></Route>
            <Route path="/favourites" element={<FavoritesPage/>}></Route>
          </Routes> 
  
    </div>

  )
  
}
export default App;
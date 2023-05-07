import {Route, Routes} from 'react-router-dom';
import AllMeetups from "./pages/AllMeetups";
import NewMeetupPages from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favourites";
import Layout from './components/layout/Layout';

function App() {
  return  ( 
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetups />}></Route>
            <Route path="/new-meetup" element={<NewMeetupPages/>}></Route>
            <Route path="/favourites" element={<FavoritesPage/>}></Route>
          </Routes>
        </Layout>
          


  )
  
}
export default App;
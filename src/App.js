import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import SousCategories from './Pages/SousCategories/SousCategories';
import Management from './Pages/Management/Management';
import Recepes from './Pages/Recepes/Recepes';
import Home from './Pages/Home/Home';
import Search from './Pages/Search/Search';
import Connection from './Pages/Connection/Connection';
import UserDashboard from './Pages/UserDashboard/UserDashboard';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <div className='flex flex-col bg-gray-400 '>
      <div className='fixed bg-rose-800 shadow-md z-50 w-full px-2 py-2 flex justify-between items-center'>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/categories/:categorie/:nameSousCategorie' element={<SousCategories />} />
          <Route path='/:sousCategorie/:recepes/:id' element={<Recepes />} />
          <Route path='/state/zoneZekoJF/House' element={<Management />} />
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home/connection' element={<Connection />} />
          <Route path='/search' element={<Search />} />
          <Route path='/home/dashboard/user' element={<ProtectedRoutes>
            <UserDashboard />
          </ProtectedRoutes>} />
        </Routes>
      </div>
      <div className='fixed bottom-0 bg-rose-800 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

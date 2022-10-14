import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import SousCategories from './Pages/SousCategories/SousCategories';
import Management from './Pages/Management/Management';
import Recepes from './Pages/Recepes/Recepes';

function App() {
  return (
    <div className='grid grid-flow-row auto-rows-max'>
      <div className='fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center'>
        <Header />
      </div>
      <div className='mt-20 h-2/3'>
        <Routes>
          <Route path='/home' element='' />
          <Route path='/categories/:categorie/:nameSousCategorie' element={<SousCategories />} />
          <Route path='/:sousCategorie/recepes' element={<Recepes />} />
          <Route path='/state/zoneZekoJF/House' element={<Management />} />
          <Route path='/' element={<Navigate to='/home' />} />
        </Routes>
      </div>
      <div className='fixed bottom-0 bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import SousCategories from './Pages/SousCategories/SousCategories';

function App() {
  return (
    <div>
      <div className='fixed bg-blue-600 shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center'>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/home' element='' />
          <Route path='/categories/:id' element={<SousCategories />} />
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

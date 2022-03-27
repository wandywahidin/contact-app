import './App.css';
import { Route, Routes } from 'react-router-dom'

// pages
import Hero from '../pages/hero'
import Detail from '../pages/detail'
import Category from '../pages/category';
import NavbarComponent from '../navbar';


function App() {
  return (
    <>
    <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/:category' element={<Category/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;

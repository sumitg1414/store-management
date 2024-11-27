import { BrowserRouter, Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


import './App.css';
import Header from './templates/Header';
import Addproduct from './product/Addproduct';
import Viewproduct from './product/Viewproduct';


function App() {
  return (
    <div className='text-black'>
      <BrowserRouter>
      
     <Header></Header>
    <div className='App'>
     <Routes >
     <Route path='/' element={<Viewproduct/>}></Route>
      <Route path='/add' element={<Addproduct/>}></Route>
      <Route path='/view' element={<Viewproduct/>}></Route>

      <Route path='edit/:id' element={<Addproduct/>}></Route>
     </Routes>
    </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

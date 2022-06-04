
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/shop' element={<Shop />}></Route>
       <Route path='/' element={<Shop />}></Route>
      <Route path='/order' element={<Order />}></Route>
      <Route path='/inventory' element={<Inventory />}></Route>
      <Route path='/about' element={<About />}></Route>
       <Route path='*' element={<NotFound />}></Route>
     </Routes>
     
    </div>
  );
}

export default App;

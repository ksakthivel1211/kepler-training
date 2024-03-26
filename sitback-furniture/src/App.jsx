import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/home';
import OrderConfirmation from './page/order-confirmation/order-cofirmation';
import PageLayout from './page/page-layout/page-layout';
import Shopping from './page/shopping/shopping';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/shopping/:categoryId' element={<Shopping/>}/>
          <Route path='/shopping/order' element={<OrderConfirmation/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

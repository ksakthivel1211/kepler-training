import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/home';
import PageLayout from './page/page-layout/page-layout';
import Shopping from './page/shopping/shopping';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/shopping/:categoryId' element={<Shopping/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

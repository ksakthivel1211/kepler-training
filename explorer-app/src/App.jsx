import { Route, Routes } from 'react-router-dom';
import './App.css';
import CityDetail from './components/city-detail/city-detail';
import Home from './components/Home/home';
import PageLayout from './components/page-layout/page-layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout/>}>
        <Route path='/' element={<Home/>} />
        <Route path=':cityName' element={<CityDetail/>}/>
      </Route>
    </Routes>
  );
}

export default App;

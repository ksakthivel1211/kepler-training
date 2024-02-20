
import './App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import { USER_DATA } from './data';

const App = ()=> {
  return (
    <div className="App">
      <Header />
      <section className='card-holder'>
        {USER_DATA.map((value,index)=>(
        <Card key={index} {...value}></Card>
        ))}
      </section>
    </div>
  );
}

export default App;

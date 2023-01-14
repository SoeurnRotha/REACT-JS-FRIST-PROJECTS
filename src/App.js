
import './App.css';
import Navbar from './Componects/Navbar';
import Home from './Componects/page/Home';
import { Routes , Route} from 'react-router-dom';

import AboutUs from './Componects/page/AboutUs';
import Blog from './Componects/page/Blog';
import Contact from './Componects/page/Contact';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='path'>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<AboutUs/>} />
        <Route path='/blog' element ={<Blog/>} />
        <Route path='/contact' element ={<Contact/>} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;

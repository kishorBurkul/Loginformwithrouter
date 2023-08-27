import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './react-routerv6/Home';
import About from './react-routerv6/About';
import Contact from './react-routerv6/Contact';
import Service from './react-routerv6/service';
import PageNotFound from './react-routerv6/PageNotFound';
import Header from './Header';
import Login from './react-fromvalidation/Login';

function App() {
  return (
  
  
    <BrowserRouter>
  
    <Routes>
    {/* <Route path='/' element={<Header/>}> */}

   
    <Route path='/' element={<Login/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='service' element={<Service/>}/>
    <Route path='*' element={<PageNotFound/>} />

    </Route>

    </Routes>
    
    
    </BrowserRouter>
  
  );
}

export default App;

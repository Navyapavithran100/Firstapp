import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Useeffect from './components/Useeffect';
import {  Route,Routes } from 'react-router-dom';
import Mapping from './components/Mapping';
import Listname from './components/Listname';
import Api from './components/Api';
import Gridget from './components/Gridget';

function App() {
  return (
    <div className="App">
    <Navbar/>
    {/*<useeffect/>*/}
    <Routes>
         
    <Route path='/' element={<Login/>}/>
    <Route path='/sign' element={<Signup/>}/>
    <Route path='/c' element={<Counter/>}/>
    <Route path='/t' element={< Mapping/>}/>
     <Route path='/b' element={<Listname/>}/>
     <Route path='/k' element={<Api/>}/>
     <Route path='/n' element={<Gridget/>}/>
    </Routes>
    </div>
  );
}

export default App;

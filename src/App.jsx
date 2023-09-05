import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import { StateManagement } from './components/StateManagement';
import { Post } from './components/Post';
import Todo from './components/Todo';
import ProductList from './components/ProductList';

function App() {
  return (
    <div >
      <h1>My React App</h1>

      <BrowserRouter>

     {/* <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>*/}

      <Navbar/>


      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/Signup" element={ <Signup /> } />
        <Route path="/EventHandling" element={ <EventHandling /> } />
        <Route path="/state" element={ <StateManagement /> } />
        <Route path="/post" element={ <Post /> } />
        <Route path="/todo" element={ <Todo /> } />
        <Route path="/list" element={ <ProductList /> } />
        <Route path="*" element={ <NotFound /> } />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

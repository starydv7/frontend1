
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route element={<PrivateRoute/>}>
        <Route path='/' element={<h1>Products List components</h1>} />
         <Route path='/add'element={<h1>Products Add...</h1>}/>
          <Route path='/update'element={<h1>Products Update</h1>}/>
           <Route path='/logout'element={<h1>Logout</h1>}/>
        <Route path='/profile' element={<h1>Profile.....</h1>} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <FetchData/>
     <Footer/>
    </div>
  );
}

export default App;

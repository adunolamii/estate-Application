import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import AdminBeachProp from './Admin/AdminBeachProp';
import AdminMountainProp from './Admin/AdminMountainProp';
import AdminVillageProp from './Admin/AdminVillageProp';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Features from './Pages/Features'
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">

<Router>
<Navbar/>
<Routes>

                      {/* <Route path="navbar" element={<Home/>}/> */}
                      <Route path="/adminVillageProp" element={<AdminVillageProp/>}/>
                      <Route path="/adminBeachProp" element={<AdminBeachProp/>}/>
                      <Route path="/adminMountainProp" element={<AdminMountainProp/>}/>

                      <Route path="/" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="/features" element={<Features/>}/>
                      <Route path="/signIn" element={<SignIn/>}/>
                      <Route path="/signUp" element={<SignUp/>}/>
                      <Route path="/*" element={<Error/>}/>

</Routes>
</Router>
<ToastContainer/>
    </div>
  );
}

export default App;

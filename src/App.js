import logo from './logo.svg';
// import './App.css';
import { Header } from './Header';
import { Navbar } from './Header/Navbar';
import { Card } from './Header/Card';

import{Route,Router,Routes}from "react-router-dom"
import { About } from './Header/Navbar/About';
import { ContactUs } from './Pages/ContactUs';
import Services from './Components/OurServices/Services';
import Login from './Pages/Loginpage/Login';
import Footermain from './Components/Footer/Footermain';

function App() {
  return (
    <div className="App">
           <Header/>
        
       <Navbar/>  
       <Routes>
        {/* <Route path="/"element={<Home/>}/> */}
        {/* <Route path="/productList"element={<Product/>}/> */}
        <Route path="/about"element={<About/>}/>
        </Routes> 
<ContactUs/>
        <Card/>  
        <Services/>
        <Login/>
        <Footermain/>
      
       
    </div>
  );
}

export default App;

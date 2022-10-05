import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Opportunities from './pages/Opportunities';
import Portfolio from './pages/Portfolio';
import Internship from './pages/Internship';
import {Routes,Route} from "react-router-dom";
import * as React from "react";
import Header from './components/Header';


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='aboutus' element={<AboutUs/>}></Route>
      <Route path='career' element={<Careers/>}></Route>
      <Route path='contactus' element={<ContactUs/>}></Route>
      <Route path='opportunities' element={<Opportunities/>}></Route>
      <Route path='portfolio' element={<Portfolio/>}></Route>
      <Route path='internship' element={<Internship/>}></Route>
      </Routes>
  );
}

export default App;

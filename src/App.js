import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import {Routes,Route} from "react-router-dom";
import * as React from "react";


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}>

      </Route>
    </Routes>
  );
}

export default App;

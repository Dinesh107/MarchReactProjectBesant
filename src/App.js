import React  from 'react';
import './App.css';
import data from './Components/back/Data/Data';
import Header from './Components/front/Header/Header';
import Routes  from './Components/front/Routes/Routes';
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {

   const {productItems} = data;
   return (
   <div>
      <Router>
         <Header/>
         <Routes/>
      </Router>
   </div>

   )
}

export default App;

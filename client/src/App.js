import React, {Fragment} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import FullTodo from './components/Todo/FullTodo';
import MainHome from "./components/HomeFolder/MainHome";
import CalcMain from './components/Calculator/CalcMain';
import Portfolio from './components/Portfolio/MainPortfolio';

function App() {
  return  (
  <div>
      <Routes>
        <Route path="/todo" element={<FullTodo/>}></Route>
        <Route path="/" element={<MainHome/>}></Route>
        <Route path="/calc" element={<CalcMain/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

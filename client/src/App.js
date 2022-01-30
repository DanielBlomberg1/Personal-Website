import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import InputTodo from "./components/Todo/InputTodo";
import ListTodos from "./components/Todo/ListTodos";
import MainHome from "./components/HomeFolder/MainHome";

function App() {
  return  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<><div className="container"><InputTodo/><ListTodos/></div></>}></Route>
        <Route path="/" element={<MainHome/>}></Route>
      </Routes>
    </BrowserRouter>
    </Fragment>
}

export default App;

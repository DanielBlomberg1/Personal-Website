import React, {Fragment} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/view/todo" element={<ListTodos/>}></Route>
        <Route path="/edit/todo" element={<ListTodos/>, <InputTodo/>}></Route>
      </Routes>
    </BrowserRouter>
    </Fragment>
}

export default App;

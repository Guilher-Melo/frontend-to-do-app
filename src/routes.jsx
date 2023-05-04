import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./todo/Todo";
import About from "./about/About";


export default function Rotas(props) {
  return(
    <Routes>
      <Route path="/todos" Component={Todo} />
      <Route path="/about" Component={About} />
      <Route path="*" Component={Todo} />
    </Routes>
  )
}
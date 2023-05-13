import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "./todo/Todo";


export default function Rotas(props) {
  return(
    <Routes>
      <Route path="/" Component={Todo} />
      <Route path="*" Component={Todo} />
    </Routes>
  )
}
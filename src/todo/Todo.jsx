import React, { useState } from "react";
import axios from 'axios';

import Header from "../template/Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// const URL = 'http://localhost:3003/api/todos';
const URL = "https://backend-to-do.onrender.com/api/todos";

export default function Todo(props) {
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);
  
  window.onload = refresh;

  function handleChange(e) {
    setDescription(e.target.value);
  }

  function refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
    .then(resp => setList(resp.data));
  }

  /*function handleSearch(){
    refresh(description);
  }
  */

  async function handleAdd() {
     await axios.post(URL, {description});
     refresh();
     setDescription('');
  }

  async function handleRemove(todo) {
    await axios.delete(`${URL}/${todo._id}`);
    refresh(description);
  }

  function handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
    .then(() => refresh(description));
  }

  async function handleMarkAsPending(todo) {
    await axios.put(`${URL}/${todo._id}`, {...todo, done: false});
    refresh(description);
  }

  function handleClear() {
    refresh();
    setDescription('')
  }

  return (
    <div>
      <Header name="Tarefas" small="Cadastro" />
      <TodoForm handleAdd={handleAdd} description={description} handleChange={handleChange} handleClear={handleClear}/>
      <TodoList list={list} handleRemove={handleRemove} handleMarkAsDone={handleMarkAsDone} handleMarkAsPending={handleMarkAsPending}/>
    </div>
  )
}
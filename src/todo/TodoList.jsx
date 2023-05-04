import React from "react";
import IconButton from "../template/IconButton";
import '../template/custom.css';

export default function TodoList(props) {
const renderRows = () => {
  const list = props.list || [];
  return list.map(todo => (
    <tr key={todo._id}>
      <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
      <td>
        <IconButton btn='success' icon='check' onClick={()=>props.handleMarkAsDone(todo)} hide={todo.done} />
        <IconButton btn='warning' icon='undo' onClick={()=>props.handleMarkAsPending(todo)} hide={!todo.done} />
        <IconButton btn='danger' icon='trash-o' onClick={()=>props.handleRemove(todo)} hide={!todo.done}/>
      </td>
    </tr>
  ))
}

  return (
   <table className="table">
    <thead>
      <tr>
        <th>Descrição</th>
        <th className="tableActions">Ações</th>
      </tr>
    </thead>

    <tbody>
      {renderRows()}
    </tbody>
   </table>
  )
}
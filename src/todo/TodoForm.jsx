import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

export default function TodoForm(props) {

  const keyHandler = (e) => {
    if(e.key ==='Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if(e.key === 'Escape') {
      props.handleClear();
    }
  }

  return (
    <div role="form" className="todoForm">
      <Grid cols='12 9 10'>
        <input  className="form-control" id="description" placeholder="Adicione uma tarefa" value={props.description}
        onChange={props.handleChange} onKeyUp={keyHandler} />  
      </Grid>

      <Grid cols='12 3 2'>
        <IconButton btn='primary' icon='plus' onClick={props.handleAdd} />
        {/*<IconButton btn='info' icon='search' onClick={props.handleSearch} /> */}
        <IconButton btn='default' icon='close' onClick={props.handleClear} /> 
      </Grid>
    </div>
  )
}
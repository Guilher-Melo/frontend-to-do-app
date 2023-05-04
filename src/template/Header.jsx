import React from "react";

export default function Header(props) {
  return(
    <header className="page-header">
      <h2>{props.name} <small>{props.small}</small></h2>
    </header>
  )
}
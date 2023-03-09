import React from 'react';

export default function List(props){

  return (
    <ol>
      {props.data.map(x=>{
       return <li key={x}>{x}</li>
      })}
    </ol>
  );
}
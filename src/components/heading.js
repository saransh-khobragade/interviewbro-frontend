import React from 'react';

export default function Heading(props) {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h3 >{props.data}</h3>
    </div>
  );
}
import React from 'react';
import Gist from "react-gist";

export default function CodeBlock(props) {

  const gistData = {
    id: props.data,
    file: null
  };

  return (
    <div className="container" >
      <Gist id={gistData.id} />
    </div>
  );
}
import React from 'react';
import { CopyBlock, ocean } from "react-code-blocks";

export default function CodeBlock(props) {
  
  const language = "python"
  const showLineNumbers = true
  let code = props.data
  for(let i=0;i<220;i++){ code +=" ";}

  return (
    <div className="container" >
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={ocean}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
import React, { useEffect, useRef } from 'react'
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/mode/htmlmixed/htmlmixed";


function Editor() {
  
  useEffect(() => {
    async function init(){
        CodeMirror.fromTextArea(document.getElementById('realtimeEditor'), {
          mode: {name: "javascript", json: true},
          theme: 'dracula',
          lineNumbers: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchBrackets: true,
        });
    }

    init();
  }, []);
  
  return <textarea id="realtimeEditor" defaultValue="// Start coding here..."></textarea>
}

export default Editor
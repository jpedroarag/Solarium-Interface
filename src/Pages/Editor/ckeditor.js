import { Link } from "react-router-dom";
const colors = require('tailwindcss/colors')
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function ckeditor() {

{/* Ckeditor fuction */}
const [text, setText] = useState('')
    return (
    
      <div className="App">
        <div className="editor ">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData()
              setText(data)
  
            }
            } />
        </div>
            <div>
              <h2 className="text-white">Content</h2>
              <p className="text-white">{text}</p>
            </div>
      </div>
    );
  }

export default ckeditor;
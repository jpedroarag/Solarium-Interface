import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

{/* Ckeditor fuction */ }
function CKEditorComponent() {

  const [addData, setVal] = useState("");
  const [addedData, showData] = useState(0);
  const handleChange = (e,editor) =>{
    const data = editor.getData();
    setVal(data);
  }
  return (


    <div style={{ width: '1200px', display: 'inline-block', textAlign: 'left' }}>
      <div style={{ width: '1200px', display: 'inline-block', textAlign: 'right', marginBottom: '5px' }}>
        <button style={{  color: 'white' }} onClick={() => showData(!addedData)}>{addedData ? 'Hide Data' : 'Show Data'}</button>

      </div>
      <CKEditor editor = {ClassicEditor}  onChange={handleChange} />
      <div className='text-white'>
        {addedData ? addData : ''}
      </div>
    </div>


  );
}

export default CKEditorComponent;
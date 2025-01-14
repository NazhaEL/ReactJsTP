import { createRef, useState } from "react";

export default function PostEdit(props){
      // const ref_input  = createRef()
      let title = props.post?props.post.title:'';
      const [value, setValue] = useState(title)
      
      return <div style={{width: 200}}>
            <div>
                  <label>Title</label>
                  <input type={'text'} defaultValue={title} onChange={evt => setValue(evt.target.value)}/>
            </div>
            <button onClick={() => props.handleSubmit(value)}>Valider</button>
      </div>
}
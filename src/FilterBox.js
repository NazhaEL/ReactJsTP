// import { useState } from "react";

export default function FilterBox(props){
      // const [search, setSeacrh] = useState('');
      
      return <div style={{padding: 20, border: '1px solid #ccc'}}>
            <input type="text" onChange={evt => {
            //   props.handleSearch(evt.target.value.toLowerCase())
            //   setSeacrh(evt.target.value.toLowerCase())
            console.log('dispatch event');
            const ev = new CustomEvent('update_search', 
                  {detail: evt.target.value.toLowerCase()}
            );
            document.dispatchEvent(ev);
            }}
            placeholder="search"
            style={{marginBottom: 30, width:200, padding: 10}}
            />
      </div>;
}
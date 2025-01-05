// import { useState } from "react";

import { useContext } from "react";
import SearchContext from "./SearchContext";

export default function FilterBox(props){
      // const [search, setSeacrh] = useState('');
      const {setSearch} = useContext(SearchContext);
      
      return <div style={{padding: 20, border: '1px solid #ccc'}}>
            <input type="text" onChange={evt => {
            // props.handleSearch(evt.target.value.toLowerCase())
            setSearch(evt.target.value.toLowerCase());
            //   setSeacrh(evt.target.value.toLowerCase())
            // console.log('dispatch event');
            // const ev = new CustomEvent('update_search', 
            //       {detail: evt.target.value.toLowerCase()}
            // );
            // document.dispatchEvent(ev);
            }}
            placeholder="search"
            style={{marginBottom: 30, width:200, padding: 10}}
            />
      </div>;
}
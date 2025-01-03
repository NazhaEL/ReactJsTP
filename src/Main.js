import { useState } from "react";
import FilterBox from "./FilterBox";
import StudentsList from "./Students";

export default function Main(){
      const [search, setSeacrh] = useState('');
      return <div 
               style={{display: 'flex', 
               flexDirection: 'column'}}>
            <FilterBox 
              handleSearch={(value) => 
               setSeacrh(value)}/>
            <StudentsList 
             search={search}/>
      </div>;
}
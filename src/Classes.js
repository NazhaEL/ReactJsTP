import { useContext, useState } from "react";
import StudentItem from "./StudentItem";
import Welcome from "./Welcome";
import SearchContext from "./SearchContext";
import ClassItem from "./ClassItem";

export default function StudentsList(){
      // const {search}  =useContext(SearchContext)
      const search = '';
      const classes = [
           {id: 0, level: 'TPS', 
             name: 'AAA'},
           {id: 1, level: 'CP', 
             name: 'AAA'},
             {id: 2, level: 'CP', 
              name: 'BBB'},,
      ];
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {classes
              .filter(cl => cl.level.toLowerCase().includes(search)
                      || cl.name.toLowerCase().includes(search))
              .map((cl, idx) => {
             return <ClassItem 
                  key={cl.id} 
                  class={cl}
                  index={idx}
                  />
            })}
            
      </div>;
     }
import { useState } from "react";
import StudentItem from "./StudentItem";
import Welcome from "./Welcome";

export default function StudentsList(props){
      
      const students = [
           {id: 0, first_name: 'test1', 
             last_name: 'AAA'},
           {id: 1, first_name: 'test2', 
             last_name: 'BBB'},
           {id: 2, first_name: 'test3', 
            last_name: 'CCC'},
            {id: 3, first_name: 'test3', 
              last_name: 'CCC'},
              {id: 4, first_name: 'test3', 
                last_name: 'CCC'},
                {id: 5, first_name: 'test3', 
                  last_name: 'CCC'},
                  {id: 6, first_name: 'test3', 
                    last_name: 'CCC'},
                    {id: 7, first_name: 'test3', 
                      last_name: 'CCC'},
      ];
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {students
              .filter(std => std.first_name.toLowerCase().includes(props.search)
                      || std.last_name.toLowerCase().includes(props.search))
              .map((std, idx) => {
             return <StudentItem 
                  key={std.id} 
                  student={std}
                  index={idx}
                  />
            })}
            
      </div>;
     }
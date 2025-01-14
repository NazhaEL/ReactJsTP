import { useContext, useEffect, useState } from "react";
import StudentItem from "./StudentItem";
// import SearchContext from "./SearchContext";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function StudentsList(){
      // const {search} = useContext(SearchContext)
      const search = useSelector((state) => state.search)
      const params = useParams();
      const [students, setStudents] = useState([]);
      useEffect(() => {
        // get list of students from local file json placed in public
        fetch('/students.json')
        .then(res => res.json())
        .then(data => {
         setStudents(data);
        })
      }, [])
      
      // const students = [
      //      {id: 0, first_name: 'test1', 
      //        last_name: 'AAA', classe_id: 1},
      //      {id: 1, first_name: 'test2', 
      //        last_name: 'BBB', classe_id: 1},
      //      {id: 2, first_name: 'test3', 
      //       last_name: 'CCC', classe_id: 1},
      //       {id: 3, first_name: 'test3', 
      //         last_name: 'CCC', classe_id: 2},
      //         {id: 4, first_name: 'test3', 
      //           last_name: 'CCC', classe_id: 2},
      //           {id: 5, first_name: 'test3', 
      //             last_name: 'CCC'},
      //             {id: 6, first_name: 'test3', 
      //               last_name: 'CCC'},
      //               {id: 7, first_name: 'test3', 
      //                 last_name: 'CCC'},
      // ];
      let students_list = students
      .filter(std => (!params.id || params.id == std.classe_id));
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {(students_list.length>0)?students_list.filter(std => 
              std.first_name.toLowerCase().includes(search)
              || std.last_name.toLowerCase().includes(search)
            )
              .map((std, idx) => {
             return <StudentItem 
                  key={std.id} 
                  student={std}
                  index={idx}
                  />
            }):(params.id?'No student found in this class':'')}
            
      </div>;
     }
import { useEffect, useState } from "react"

export default 
function StudentItem(props){

      return <button style={{
            width: 100, 
            height: 100,
            margin: 10,
            background: props.index % 2?
                         '#ccc':'#eee', 
            color: '#FFF', 
            padding: 10, 
            borderRadius: 7, 
            border:0, 
            
       }}>
            {props.student.first_name} 
            {props.student.last_name} 
    </button>
}
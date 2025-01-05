import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default 
function ClassItem(props){
      const navigate = useNavigate();
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
            
       }}
       onClick={() => {
            navigate(`/classes/${props.class.id}/students`)
       }}>
            {props.class.level}-{props.class.name} 
    </button>
}
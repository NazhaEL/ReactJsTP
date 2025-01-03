import { Component, memo, useEffect, useState } from "react"

const colors = ['#ccc', 'red', 'green', 'yellow'];
const Welcome = memo(() => {
 const [counter, setCounter] = useState(0); 
 const [counter2, setCounter2] = useState(0); 
//  var counter = 1; 
// useEffect(() => {
//  console.log('update 111')
// })

// useEffect(() => {
//  console.log('update 222')
// },[])

// useEffect(() => {
//  console.log('update 333')
// }, [counter2])
console.log(Math.round((Math.random()* 100))%4)
 return <> 
      <button style={{fontSize: 30, background: colors[Math.round((Math.random()* 100))%4]}}
      onClick={() => {
            setCounter(Math.random());
      }}>
            {counter}
      </button>
      <button style={{fontSize: 30}}
      onClick={() => {
            setCounter2(Math.random());
      }}>
            {counter2}
      </button>
 </>;
});

export default Welcome

export function Button(props){
      return <button style={{
            ...props.style,
            width: 200, 
            marginBottom: 10,
            background: '#ccc', 
            color: '#FFF', 
            padding: 10, 
            borderRadius: 7, 
            border:0, 
            
       }}>
            {props.text}
    </button>
}

export class Welcome3 extends Component{
      // constructor(props){

      // }
      state = {
            counter: 0
      }
      render(){       
            const {counter} = this.state     
            return <button onClick={() =>{
                  this.setState({counter:  counter + 1})
            }}>
                  {counter}
            </button>
      }
      
}

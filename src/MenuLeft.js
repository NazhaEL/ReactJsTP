import { Link, Route, Routes, useNavigate } from "react-router-dom";

 

export default function MenuLeft(){
      const navigate = useNavigate()
      return <div 
               style={{display: 'flex', 
               flexDirection: 'column'}}>
            <h2>Menu left</h2>
            <div>
                  <div onClick={() => navigate('/')}>
                        Students
                  </div>
                  <div>
                        <Link to="/classes">classes</Link>
                  </div>
                  <div>
                        <Link to="/posts">posts</Link>
                  </div>
            </div>
            
      </div>;
}
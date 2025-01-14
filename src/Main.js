import FilterBox from "./FilterBox";
import { Outlet } from "react-router-dom";

export default function Main(){
      return <div 
               style={{display: 'flex', 
               flexDirection: 'column'}}>
            <FilterBox/>
            {/* <StudentsList/> */} 
            {<Outlet/>}
      </div>;
}
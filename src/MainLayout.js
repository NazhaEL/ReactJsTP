import MenuLeft from "./MenuLeft";
import Header from "./Header";
import Main from "./Main";

function MainLayout(){
    return <div style={{padding: 20, 
        display: 'flex'}}>
      <div style={{width: 200, 
        border: '1px solid #ccc'}}>
        <MenuLeft/>
      </div>
      <div style={{display: 'flex', 
        flexDirection:'column', 
        flex: 1, border: '1px solid #ccc'}}>
        <Header/>
        <Main/>
      </div>
    </div>
}

export default MainLayout
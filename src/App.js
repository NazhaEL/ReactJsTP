import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchProvider from "./SearchProvider";
import MainLayout from "./MainLayout";
import { lazy } from "react";
// import Welcome, { Welcome3 } from "./Welcome";

const StudentsList = lazy(() => import('./Students'));
const ClassesList = lazy(() => import('./Classes'));


function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<StudentsList/>}/>
            <Route path="/classes" element={<ClassesList/>}/>
            <Route path="/classes/:id/students" element={<StudentsList/>}/>
          </Route>
        </Routes>
      
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;

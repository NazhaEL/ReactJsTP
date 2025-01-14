import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchProvider from "./SearchProvider";
import MainLayout from "./MainLayout";
import { lazy } from "react";
import { Provider } from "react-redux";
import store from './store'
// import Welcome, { Welcome3 } from "./Welcome";

const StudentsList = lazy(() => import('./Students'));
const ClassesList = lazy(() => import('./Classes'));
const PostsList = lazy(() => import('./Posts'));


function App() {
  return (
    <BrowserRouter>
      {/* <SearchProvider> */}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<StudentsList/>}/>
            <Route path="/classes" element={<ClassesList/>}/>
            <Route path="/classes/:id/students" element={<StudentsList/>}/>
            <Route path="/posts" element={<PostsList/>}/>
          </Route>
        </Routes>
      </Provider>
      {/* </SearchProvider> */}
    </BrowserRouter>
  );
}

export default App;

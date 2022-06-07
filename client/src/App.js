import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import Landing from './pages/Landing.jsx'
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail.jsx";
import Create from "./pages/Create"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

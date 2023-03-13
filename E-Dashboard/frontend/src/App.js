import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Pagenotfound from "./Components/Pagenotfound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path='*' element={<Pagenotfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

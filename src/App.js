import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState("");
  function xyz(ans){
    console.log(ans)
    setvalue(ans)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar xyz={xyz}/>
      <Routes>
        <Route path='/' element={<Home value={value} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Home from './component/Home.js'
import Login from './component/Login'
import ArticuloDetallado from './component/ArticuloDetallado'
import Nav from './component/Nav'

// import Prueba from './component/prueba'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <BrowserRouter>
      <Nav/>
      {/* <Prueba/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/producto" element={<ArticuloDetallado/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
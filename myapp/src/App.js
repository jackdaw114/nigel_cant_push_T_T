import GnG from './components/home_components/GnG';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import VRC from './components/home_components/VRC';
import DR from './components/home_components/DR';
import SPIC from './components/home_components/SPIC';
import Vendors from './components/Vendors';
import Assets from './components/Assets';
import Spares from './components/Spares';
import AMC from './components/AMC';
import Admin from './components/Admin';
import Login from './components/Login';




function App() {
  return (
    <div className='font-[Montserrat] overflow-x-hidden w-full min-h-screen absolute bg-stone-200'>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path='' element={<Home />}>
            <Route index element={<GnG />} />
            <Route path="vrc" element={<VRC />} />
            <Route path="dr" element={<DR />} />
            <Route path="spic" element={<SPIC />} />
          </Route>
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/spares" element={<Spares />} />
        <Route path="/amc" element={<AMC />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        </Route>
    
      </Routes>
    </BrowserRouter>
    </div>

    //  TODO: Implement routes
    // <Routes>

    // </Routes>

  );
}

export default App;

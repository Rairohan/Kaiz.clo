import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import About from './pages/About';  
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    );
    }
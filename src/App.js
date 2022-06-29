import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Contact from "./Component/Contact";
import About from"./Component/About";
function App() {
  return (
    <BrowserRouter>
        <Header />

    <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>

    </Routes>
   </BrowserRouter>
  );
}
export default App;
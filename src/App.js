import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Contact from "./Component/Contact";
import About from"./Component/About";
import Footer from './Component/Footer';
function App() {
  return (
    <Router>
        <Header />

    <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>

    </Routes>
    <Footer/>
   </Router>
  );
}
export default App;
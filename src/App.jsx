
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {
  const {state} = useContext(ContextGlobal)
  return (
      <div className="App">
          <Navbar/>
          <div className= {`container ${state.theme}`}>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/> 
          </Routes>
          </div>
          
          <Footer/>
      </div>
  );
}

export default App;

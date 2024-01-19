import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    < >
    <Router>
      <Routes>
      <Route exact path="/" element={<Navbar />}></Route>

      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact/>}> </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

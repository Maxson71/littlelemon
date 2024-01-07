import './styles/style.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./sections/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>}  />
        </Routes>
        <Footer/>
      </>
  );
}

export default App;
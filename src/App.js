import './styles/style.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./sections/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./sections/Footer/Footer";
import Reservation from "./pages/Reservation/Reservation";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/reservation" element={<Reservation/>} />
        </Routes>
        <Footer/>
      </>
  );
}

export default App;
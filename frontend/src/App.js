import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/common/Header";
import { Home } from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from "./components/pages/Cart";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/login" element={ <Login/>} />
              <Route path="/register" element={ <Register />} />
              <Route path="/cart" element={ <Cart/> } />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

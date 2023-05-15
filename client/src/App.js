import React,{useEffect, useContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import Modeler from "./views/Modeler";
import About from "./views/About";
import SeparatorComponent from "./components/Separator.component";
import HeaderComponent from "./components/Header.component";
import ImportComponent from "./components/Import.component";
import NavbarComponent from "./components/Navbar.component";
import FooterComponent from "./components/Footer.component";
import Contact from "./views/Contact";
import ScrollToTop from "./components/scrollToTop";
import { Login } from "./views/Login";
import { Signup } from "./views/Signup";
import injectContext, { Context } from "./state/appContext";
import { Profile } from "./views/Profile";
import { Products } from "./views/Products";
import { Details } from "./views/Details";
import { Cart } from "./views/Cart";
import { FAQ } from "./views/FAQ";
import Designs from "./views/Designs";

const App = () => {
  const basename = process.env.BASENAME || "";
  const {store} = useContext(Context);
  useEffect(()=>{
    if (localStorage.getItem("token")){
      store.auth=true;
      store.userEmail=localStorage.getItem("user")
    } 
     
    
  },[])

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <HeaderComponent />
        <ImportComponent />
        <SeparatorComponent />
        <NavbarComponent />
        <SeparatorComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeler" element={<Modeler />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="details/:id" element={<Details/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/designs" element={<Designs/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SeparatorComponent />
        <FooterComponent />
        <SeparatorComponent />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(App)
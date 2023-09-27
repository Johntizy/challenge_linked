import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";

//Navbar
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

//pages
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

//style
import "./App.css";



const queryClient = new QueryClient();
const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Toaster />

          <Footer />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
};

export default App;

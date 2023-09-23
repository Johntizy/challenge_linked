import { BrowserRouter, Routes, Route } from "react-router-dom";

//Navbar
import NavBar from "./layout/NavBar";

//pages
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Navbar from "./layout/Navbar/Navbar";

import { QueryClientProvider, QueryClient } from "react-query";

//style
import "./App.css";
import Footer from "./layout/Footer/Footer";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="app">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Toaster />

        <Footer />
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;

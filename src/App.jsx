import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from './pages/HeroSection';
import SignupForm from "./components/Form/RegistrationForm";
import LoginForm from './components/Form/LoginForm' 
import RegistrationForm from './components/Form/RegistrationForm'; // Adjust path as necessary
import DoctorList from './pages/DoctorList';// 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/form' element={<SignupForm />} />
          <Route path='/loginForm' element={<LoginForm />} />
          <Route path="/SignupForm" element={<RegistrationForm />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path='/*' element={<h1>404 ERROR</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

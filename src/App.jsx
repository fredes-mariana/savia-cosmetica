import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer.jsx';
import Productos from './pages/productos';
import Nosotros from './pages/nosotros';
import Contacto from './pages/contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
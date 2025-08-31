import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Komponen halaman dan bagian UI
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BrandLogos from './components/BrandLogos';
import VehicleList from './components/VehicleList';
import AutoLoanCalculator from './components/AutoLoanCalculator';
import Testimonials from './components/Testimonials';
import OurTeam from './components/OurTeam';
import LatestBlogPosts from './components/LatestBlogPosts';
import Footer from './components/Footer';
import SearchCars from './pages/SearchCars';
import SavedCars from './pages/SavedCars';
// Ikon
import { FaCarSide, FaCarAlt, FaCogs, FaBolt } from 'react-icons/fa';

// Gaya global
import './styles/App.css';

// Halaman Beranda
function HomePage() {
  return (
    <div className="app-container">
      <Header />

      {/* Hero Section */}
      <div className="main-hero-background">
        <div className="hero-content">
          <p className="tagline">Temukan Mobil Impianmu</p>
          <h1>Temukan Mobil Sempurnamu</h1>
          <SearchBar />
          <div className="car-showcase">
            <div className="car-categories">
              <CategoryButton icon={<FaCarSide />} label="SUV" />
              <CategoryButton icon={<FaCarAlt />} label="Sedan" />
              <CategoryButton icon={<FaCogs />} label="Coupe" />
              <CategoryButton icon={<FaBolt />} label="Hybrid" />
            </div>
          </div>
        </div>
      </div>

      <BrandLogos />
      <VehicleList />
      <AutoLoanCalculator />
      <Testimonials />
      <OurTeam />
      <LatestBlogPosts />
      <Footer />
    </div>
  );
}

// Komponen tombol kategori kendaraan
function CategoryButton({ icon, label }) {
  return (
    <button className="category-btn">
      {icon}
      {label}
    </button>
  );
}

// Komponen Utama dengan Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-cars" element={<SearchCars />} />
        <Route path="/saved-cars" element={<SavedCars />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css';

function SearchBar() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search-cars');
  };

  return (
    <div className="search-bar-container">
      <button className="search-button" onClick={handleSearchClick}>
        <span className="shimmer-bg"></span> {/* Background shimmer only */}
        <i className="fas fa-search"></i>
        <span className="button-text">
          Cari Semua Mobil
          {/* ❌ REMOVE shimmer element inside text */}
        </span>
      </button>
    </div>
  );
}

export default SearchBar;

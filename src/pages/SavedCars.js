import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SearchCars.css';

function SavedCars() {
  const [savedCars, setSavedCars] = useState([]);

  useEffect(() => {
    const carsFromStorage = JSON.parse(localStorage.getItem('savedCars')) || [];
    setSavedCars(carsFromStorage);
  }, []);

  const toggleSave = (car) => {
    const existing = JSON.parse(localStorage.getItem('savedCars')) || [];
    const isSaved = existing.some((saved) => saved.id === car.id);

    let updatedCars;
    if (isSaved) {
      updatedCars = existing.filter((saved) => saved.id !== car.id);
    } else {
      updatedCars = [...existing, car];
    }

    setSavedCars(updatedCars);
    localStorage.setItem('savedCars', JSON.stringify(updatedCars));
  };

  const isCarSaved = (carId) => {
    return savedCars.some((car) => car.id === carId);
  };

  return (
    <div className="search-cars-container">
      <div className="top-bar">
        <h2>Mobil Tersimpan</h2>
        <Link to="/" className="view-saved-button">
          <i className="fas fa-arrow-left"></i> Kembali ke Pencarian
        </Link>
      </div>

      {savedCars.length > 0 ? (
        <div className="horizontal-scroll-container">
          {savedCars.map((car) => (
            <div className="vehicle-card" key={car.id}>
              {/* Save/Unsave Icon */}
              <div className="save-icon" onClick={() => toggleSave(car)}>
               <i
               className={isCarSaved(car.id) ? 'fas fa-bookmark saved' : 'far fa-bookmark'}
             ></i>

              </div>

              <img src={car.image} alt={car.name} className="vehicle-image" />
              <h3>{car.name}</h3>
              <p className="vehicle-description">{car.description}</p>
              <div className="vehicle-specs">
                <div><i className="fas fa-tachometer-alt"></i> {car.mileage} KM</div>
                <div><i className="fas fa-gas-pump"></i> {car.fuel}</div>
                <div><i className="fas fa-cogs"></i> {car.transmission}</div>
              </div>
              <div className="vehicle-price-action">
                <span className="vehicle-price">{car.price}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Belum ada mobil yang disimpan.</p>
      )}
    </div>
  );
}

export default SavedCars;

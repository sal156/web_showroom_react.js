import React, { useRef, useState } from 'react';
import '../styles/VehicleList.css';

const vehicles = [
   { id: 1,
    name: 'Roll Royce Phantom – 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'Gasolin',
    transmission: 'Matic',
    price: 'RP. 22.000.000.000',
    image: process.env.PUBLIC_URL + 'https://imgsrv2.voi.id/kc3DqpxTool_6rVG2KZ_0iV4aYEziQa7aCPCB_Gd3y0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zNTE4NzAvMjAyNDAxMjcxMDI5LW1haW4uY3JvcHBlZF8xNzA2MzI2MTcyLmpwZWc.jpg',
  },
  {
    id: 2,
    name: 'Porsche 911 GT3 – 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'Gasolin',
    transmission: 'Matic',
    price: 'RP. 22.000.000.000',
    image: process.env.PUBLIC_URL + 'https://i.ytimg.com/vi/zqrz4LydmKE/maxresdefault.jpg',
  },
  {
    id: 3,
    name: 'Ferari SF-90– 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '2500',
    fuel: 'Gasolin',
    transmission: 'Automatic',
    price: 'RP. 20.000.000.000 ',
    image: process.env.PUBLIC_URL + 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/fl7hxq9rczontkgsvvw0.jpg',
  },
  {
    id: 4,
    name: 'LamboRghini Aventador LP – 2024',
    description: 'Mobil ini sangat bagus, bisa digunakan untuk p balap',
    mileage: '200',
    fuel: 'Bensin',
    transmission: 'Matic DCT',
    price: 'RP. 20.000.000.000',
    image: process.env.PUBLIC_URL + 'https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2021/07/09174038/Lamborghini-Aventador_LP780-4_Ultimae-2022-1024-03.jpg',
  },
  {
    id: 5,
    name: 'Mclaren Senna 2025 –',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'Bensi',
    transmission: 'Matic DCT',
    price: 'RP. 45.000.000.000',
    image: process.env.PUBLIC_URL + 'https://imgcdn.oto.com/medium/gallery/exterior/24/2940/mclaren-senna-24082.jpg',
    tag: ''
  },
  {
    id: 6,
    name: 'Koenigsegg Gemera – 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'bensin',
    transmission: 'Matic DCT',
    price: 'RP. 27.000.000.000',
    image: process.env.PUBLIC_URL + 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Koenigsegg_Gemera.jpg/1200px-Koenigsegg_Gemera.jpg',
  },
  {
    id: 7,
    name: 'Roll Royce Spectre (EV) 2023',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '10',
    fuel: 'Bensin',
    transmission: 'Matic',
    price: 'RP.73.500.000.000',
    image: process.env.PUBLIC_URL + 'https://imgcdn.oto.com/medium/gallery/exterior/34/2844/rolls-royce-spectre-56690.jpg',
    tag: 'baru'
  },
  {
    id: 8,
    name: 'BMW X5 2024',
    description: '3.0i xDrive40i 5dr AWD Auto',
    mileage: '200',
    fuel: 'Petrol',
    transmission: 'Automatic',
    price: '$78,000',
    image: 'https://via.placeholder.com/300x200?text=BMW+X5',
    tag: ''
  }
];

function extractYearFromName(name) {
  const match = name.match(/(19|20)\d{2}/);
  return match ? parseInt(match[0], 10) : null;
}

function VehicleList() {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('In Stock');

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const getFilteredVehicles = () => {
    const vehiclesWithYear = vehicles.map((v) => ({
      ...v,
      year: extractYearFromName(v.name) || 0,
    }));

    switch (activeFilter) {
      case 'Mobil Baru':
        return vehiclesWithYear
          .filter((v) => v.year >= 2023)
          .sort((a, b) => b.year - a.year).reverse();
      case 'Mobil Menengah':
        return vehiclesWithYear
          .filter((v) => v.year >= 2015 && v.year < 2023)
          .sort((a, b) => b.year - a.year).reverse();
      case 'Mobil Tua':
        return vehiclesWithYear
          .filter((v) => v.year > 0 && v.year < 2015)
          .sort((a, b) => b.year - a.year).reverse();
      default:
        return vehicles;
    }
  };

  return (
    <div className="vehicle-list-section">
      <div className="vehicle-list-header">
        <h2>Jelajahi Semua Mobil</h2>
      </div>

      <div className="vehicle-filters">
        {['In Stock', 'Mobil Baru', 'Mobil Menengah', 'Mobil Tua'].map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="vehicle-cards-wrapper" style={{ position: 'relative' }}>
        <button
          className="scroll-btn left"
          onClick={scrollLeft}
          aria-label="Scroll Left"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '50%',
            boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className="vehicle-cards-container"
          ref={scrollRef}
          style={{
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            padding: '0 50px',
            display: 'flex',
            gap: '16px',
          }}
        >
          {getFilteredVehicles().length === 0 ? (
            <p style={{ padding: '20px' }}>Tidak ada kendaraan ditemukan.</p>
          ) : (
            getFilteredVehicles().map((vehicle) => (
              <div className="vehicle-card" key={vehicle.id} style={{ minWidth: '300px', flexShrink: 0 }}>
                <div className="vehicle-image-container">
                  <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                  {vehicle.tag && (
                    <span className={`vehicle-tag ${vehicle.tag.toLowerCase().replace(' ', '-')}`}>
                      {vehicle.tag}
                    </span>
                  )}
                  
                </div>
                <div className="vehicle-details">
                  <h3>{vehicle.name}</h3>
                  <p className="vehicle-description">{vehicle.description}</p>
                  <div className="vehicle-specs">
                    <div>
                      <i className="fas fa-tachometer-alt"></i> {vehicle.mileage}
                    </div>
                    <div>
                      <i className="fas fa-gas-pump"></i> {vehicle.fuel}
                    </div>
                    <div>
                      <i className="fas fa-cogs"></i> {vehicle.transmission}
                    </div>
                  </div>
                  <div className="vehicle-price-action">
                    <span className="vehicle-price">{vehicle.price}</span>
                    <a href={`#details-${vehicle.id}`} className="view-details-link">
                      View Details <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <button
          className="scroll-btn right"
          onClick={scrollRight}
          aria-label="Scroll Right"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '50%',
            boxShadow: '0 0 5px rgba(0,0,0,0.2)',
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default VehicleList;
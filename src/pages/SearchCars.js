import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/SearchCars.css';

const carData = [
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
    name: 'Roll Royce Cullinan (SUV & Black Badge) – 2021 - 2022',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '2500',
    fuel: 'Gasolin',
    transmission: 'Automatic',
    price: 'RP. 16.500.000.000 ',
    image: process.env.PUBLIC_URL + 'https://imageio.forbes.com/specials-images/imageserve/5de3e6cd755ebf0006fbe2a8/Rolls-Royce-Cullinan-Black-Badge-SUV/0x0.jpg?format=jpg&crop=5993,3373,x0,y619,safe&width=960',
  },
  {
    id: 4,
    name: 'LamboRghini Aventador LP – 2024',
    description: 'Mobil ini sangat bagus, bisa digunakan untuk p balap',
    mileage: '0',
    fuel: 'Bensin 92',
    transmission: 'Matic DCT',
    price: 'RP. 20.000.000.000',
    image: process.env.PUBLIC_URL + 'https://imgcdnblog.carmudi.com.ph/wp-content/uploads/2021/07/09174038/Lamborghini-Aventador_LP780-4_Ultimae-2022-1024-03.jpg',
  },
  {
    id: 5,
    name: 'Audi A6 3.5 –c New',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '100',
    fuel: 'Petrol',
    transmission: 'Automatic',
    price: '$58,000',
    image: process.env.PUBLIC_URL + '/images/cars/audi-a6.jpg',
    tag: ''
  },
  {
    id: 6,
    name: 'Roll Royce Ghost Black Badge – 2021',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'bensin',
    transmission: 'Matic',
    price: 'RP. 13.000.000.000',
    image: process.env.PUBLIC_URL + 'https://hypeabis.id/assets/content/20211125144747000000DSC09681.jpg',
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
    tag: ''
  },
   {
    id: 8,
    name: 'Roll Royce white 2024',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '10',
    fuel: 'Bensin',
    transmission: 'Matic',
    price: 'RP.23.000.000.000',
    image: process.env.PUBLIC_URL + 'https://www.exoticcarhacks.com/wp-content/uploads/2024/09/cda54b8411acc4f450e7251a30ed36f0.jpg',
    tag: ''
  },
   {
    id: 9,
    name: 'Ferari SF-90– 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '2500',
    fuel: 'Gasolin',
    transmission: 'Automatic',
    price: 'RP. 20.000.000.000 ',
    image: process.env.PUBLIC_URL + 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/fl7hxq9rczontkgsvvw0.jpg',
  },
  {
    id: 10,
    name: 'McLaren 765LT 2024 – 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'bensin',
    transmission: 'Matic DCT',
    price: 'RP. 13.000.000.000',
    image: process.env.PUBLIC_URL + 'https://cdn.motor1.com/images/mgl/nA9VJ1/s1/mclaren-765lt-by-novitec.webp',
  },
  {
    id: 11,
    name: 'Mclaren Senna 2025 –',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'Bensi',
    transmission: 'Matic DCT',
    price: 'RP. 15.000.000.000',
    image: process.env.PUBLIC_URL + 'https://imgcdn.oto.com/medium/gallery/exterior/24/2940/mclaren-senna-24082.jpg',
    tag: ''
  },
  {
    id: 12,
    name: 'Ferrari F8 Tributo – 2025',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'Bensi',
    transmission: 'Matic DCT',
    price: 'RP. 15.000.000.000',
    image: process.env.PUBLIC_URL + 'https://i.ytimg.com/vi/Grm9tdEy0-M/sddefault.jpg?v=6693e9ac',
    tag: ''
  },
  {
    id: 13,
    name: 'Ferari F8 Tributo – 2025',
    description: '3.5 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'Bensi',
    transmission: 'Matic DCT',
    price: 'RP. 15.000.000.000',
    image: process.env.PUBLIC_URL + 'https://i.ytimg.com/vi/Grm9tdEy0-M/sddefault.jpg',
    tag: ''
  },
  {
    id: 14,
    name: 'Koenigsegg Gemera – 2024',
    description: '4.0 D5 PowerPulse Momentum 5dr AWD Auto',
    mileage: '0',
    fuel: 'bensin',
    transmission: 'Matic DCT',
    price: 'RP. 55.000.000.000',
    image: process.env.PUBLIC_URL + 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Koenigsegg_Gemera.jpg/1200px-Koenigsegg_Gemera.jpg',
  },
  {
    id: 15,
    name: 'maserati ghibli  2024 black',
    description: 'Mobil ini bertenaga dan kecepatan 0 - 100 km/jam hanya dalam 2 detik',
    mileage: '0',
    fuel: 'Bensin ron > 92',
    transmission: 'Matic DCT',
    price: "RP. 2.700.000.000",
    image: process.env.PUBLIC_URL + 'https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/2vqZudOpi8arhSoZwPaR8KUSEDpSAx5w10g8NM5N.jpg',
  },
  // Tambahkan data mobil lainnya untuk mengisi pagination
  {
    id: 16,
    name: 'maserati ghibli  2024 black',
    description: 'Mobil ini bertenaga dan kecepatan 0 - 100 km/jam hanya dalam 2 detik',
    mileage: '0',
    fuel: 'Bensin ron > 92',
    transmission: 'Matic DCT',
    price: "RP. 2.700.000.000",
    image: process.env.PUBLIC_URL + 'https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/2vqZudOpi8arhSoZwPaR8KUSEDpSAx5w10g8NM5N.jpg',
  },
  {
    id: 17,
    name: 'Maserati MC20 (2020–present - White)',
    description: 'Mobil bertenaga dan tampilan yang sangat sensasional',
    mileage: '0',
    fuel: 'Bensin ron > 92',
    transmission: 'Matic DCT',
    price: 'RP. 9.100.000.000',
    image: process.env.PUBLIC_URL + 'https://imgx.gridoto.com/crop/595x303:2977x1891/700x465/photo/2020/09/10/3221383701.jpg',
  },
  {
    id: 17,
    name: 'Lamborghini Huracan STO(2022–present) - Blue',
    description: 'Mobil bertenaga 0-100 km/h di tempu dalam waktu 2.5 s ',
    mileage: '0',
    fuel: 'Bensin 92',
    transmission: 'Matic DCT',
    price: 'RP. 13.700.000.000',
    image: process.env.PUBLIC_URL + 'https://otodriver.com/image/load/800/450/gallery/lamborghini-huracan-sto_3184.jpg',
  },
  {
    id: 18,
    name: 'BMW 1 Series - 2024',
    description: 'BMW 1 Series adalah hatchback premium yang menggabungkan performa sporty dengan kenyamanan khas BMW. Dikenal dengan desain elegan, interior modern, dan teknologi canggih, mobil ini cocok untuk pengendara yang menginginkan gaya dan dinamika berkendara dalam satu paket ringkas. ',
    mileage: '0',
    fuel: 'Bensin 92',
    transmission: 'Matic DCT',
    price: 'RP. 1.350.000.000',
    image: process.env.PUBLIC_URL + 'https://i0.wp.com/bmwstore.id/wp-content/uploads/2022/02/p90363230_lowres_the-all-new-bmw-1-se.jpg?fit=1200%2C801&ssl=1',
  },
  {
  id: 19,
    name: 'BMW 1 Series - 2025',
    description: 'BMW 2 Series adalah mobil kompak premium yang hadir dalam beberapa varian, termasuk Coupé, Gran Coupé, dan Convertible. Mobil ini menawarkan performa sporty, handling presisi khas BMW, serta desain agresif dan elegan. Cocok bagi pengemudi yang menginginkan gaya, kenyamanan, dan pengalaman berkendara dinamis dalam ukuran yang lebih ringkas. ',
    mileage: '0',
    fuel: 'Bensin 92',
    transmission: 'Matic DCT',
    price: 'RP. 1.430.000.000',
    image: process.env.PUBLIC_URL + 'https://imgcdn.oto.com/medium/gallery/color/3/26/bmw-2-series-coupe-color-122261.jpg',
  },
  {
  id: 18,
    name: 'BMW 1 Series - 2024',
    description: 'BMW 1 Series adalah hatchback premium yang menggabungkan performa sporty dengan kenyamanan khas BMW. Dikenal dengan desain elegan, interior modern, dan teknologi canggih, mobil ini cocok untuk pengendara yang menginginkan gaya dan dinamika berkendara dalam satu paket ringkas. ',
    mileage: '0',
    fuel: 'Bensin 92',
    transmission: 'Matic DCT',
    price: 'RP. 1.350.000.000',
    image: process.env.PUBLIC_URL + 'https://otodriver.com/image/load/800/450/gallery/lamborghini-huracan-sto_3184.jpg',
  },
];

function SearchCars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedCars, setSavedCars] = useState(() => {
    const saved = localStorage.getItem('savedCars');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const brandFilter = queryParams.get('brand');

  // Pagination config
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 12;

  const filteredCars = carData.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brandFilter
      ? car.name.toLowerCase().includes(brandFilter.toLowerCase())
      : true;
    return matchesSearch && matchesBrand;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const toggleSaveCar = (car) => {
    const isSaved = savedCars.some((saved) => saved.id === car.id);
    const updatedSavedCars = isSaved
      ? savedCars.filter((saved) => saved.id !== car.id)
      : [...savedCars, car];

    setSavedCars(updatedSavedCars);
    localStorage.setItem('savedCars', JSON.stringify(updatedSavedCars));
  };

  const goToSavedCarsPage = () => {
    navigate('/saved-cars');
  };

  return (
    <div className="search-cars-container">
      <div className="top-bar">
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Cari mobil..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset halaman saat user mencari
            }}
          />
        </div>
        <div className="saved-button-container">
          <button className="view-saved-button" onClick={goToSavedCarsPage}>
            <i className="fas fa-bookmark"></i> Mobil Tersimpan ({savedCars.length})
          </button>
        </div>
      </div>

      <div className="horizontal-scroll-container">
        {currentCars.length > 0 ? (
          currentCars.map((car) => (
            <div className="vehicle-card" key={car.id}>
              <div className="vehicle-image-container">
                <img src={car.image} alt={car.name} className="vehicle-image" />
                {car.tag && (
                  <span className={`vehicle-tag ${car.tag.toLowerCase().replace(/ /g, '-')}`}>
                    {car.tag}
                  </span>
                )}
                <button
                  className={`save-button ${savedCars.some((saved) => saved.id === car.id) ? 'saved' : ''}`}
                  onClick={() => toggleSaveCar(car)}
                  aria-label={`Simpan mobil ${car.name}`}
                >
                  <i className="fas fa-bookmark"></i>
                </button>
              </div>
              <div className="vehicle-details">
                <h3>{car.name}</h3>
                <p className="vehicle-description">{car.description}</p>
                <div className="vehicle-specs">
                  <div><i className="fas fa-tachometer-alt"></i> {car.mileage} KM</div>
                  <div><i className="fas fa-gas-pump"></i> {car.fuel}</div>
                  <div><i className="fas fa-cogs"></i> {car.transmission}</div>
                </div>
                <div className="vehicle-price-action">
                  <span className="vehicle-price">{car.price}</span>
                  <a href={`#details-${car.id}`} className="view-details-link">
                    Lihat Detail <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Mobil tidak ditemukan.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>&lt;</button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage} disabled={currentPage === totalPages}>&gt;</button>
        </div>
      )}
    </div>
  );
}

export default SearchCars;

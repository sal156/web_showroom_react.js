import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BrandLogos.css';

const brands = [
  { name: 'Roll Royce', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXTEGGiRWfhcjX4EhJZmhQ89PiKHkl5rCkw&s' },
  { name: 'Lamborghini', logo: 'https://upload.wikimedia.org/wikipedia/id/1/1d/Lamborghini_Logo1.png' },
  { name: 'Ferari', logo: 'https://images.seeklogo.com/logo-png/5/2/ferrari-emblem-logo-png_seeklogo-53763.png' },
  { name: 'MCLaren', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfjCbUjb2PY0AyqZ_Hdja1TzDQnkL33UBRQ&s' },
  { name: 'knoeneseng', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Koenigsegg_logotype2014.png/1200px-Koenigsegg_logotype2014.png' },
  { name: 'Maserati', logo: 'https://i.etsystatic.com/38881100/r/il/45e678/4772970676/il_570xN.4772970676_nus8.jpg' },
  { name: 'Porsche', logo: 'https://icon2.cleanpng.com/lnd/20241224/wo/6f05182acb530c6bb3fc0fb079a5eb.webp' },
  { name: 'BMW', logo: 'https://bmw.astra.co.id/wp-content/uploads/2023/07/BMW.svg_-1024x1024.png' },
  { name: 'Mercedes Benz', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GmhHWLdR3NooeqCs_zvt7nqSsJStZkhYWA&s' },
  { name: 'Audi', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg' },
  { name: 'Toyota', logo: 'https://images.seeklogo.com/logo-png/25/2/toyota-logo-png_seeklogo-258445.png' },
];

function BrandLogos() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClickBrand = (brandName) => {
    navigate(`/search-cars?brand=${encodeURIComponent(brandName)}`);
  };

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const scrollStep = 120;
  const delay = 1800;

  const interval = setInterval(() => {
    if (isHovered) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    // Hitung sisa scroll
    const remainingScroll = maxScrollLeft - currentScroll;

    if (remainingScroll <= scrollStep) {
      // Sudah hampir mentok, langsung scroll ke ujung lalu reset
      container.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });

      // Delay sebentar lalu balik ke awal
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }, 1800); // waktu tunggu sebelum reset
    } else {
      // Masih bisa scroll
      container.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  }, delay);

  return () => clearInterval(interval);
}, [isHovered]);




  return (
    <div 
      className="brand-logos-section"
      onMouseEnter={() => setIsHovered(true)}  // pause scroll saat hover
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="brand-logos-container" ref={scrollRef}>
        {brands.map((brand, index) => (
          <div
            className="brand-card"
            key={index}
            onClick={() => handleClickBrand(brand.name)}
            style={{ cursor: 'pointer' }}
          >
            <img src={brand.logo} alt={brand.name} className="brand-logo-image" />
            <p className="brand-name">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandLogos;

// src/components/Testimonials.js
import React, { useRef } from 'react';
import '../styles/Testimonials.css';
import { text } from '@fortawesome/fontawesome-svg-core';

const testimonialsData = [
  {
    id: 1,
    rating: 5,
    text: "Proses penjualan sangat sederhana dan mudah. Maximillian sangat ramah dan jujur, benar-benar luar biasa.",
    author: "All Smith",
  },
  {
    id: 2,
    rating: 5,
    text: "Pekerjaan yang bagus untuk proyek ini. Proses penjualan sangat sederhana dan mudah. Maximillian sangat ramah dan luar biasa.",
    author: "John Doe",
  },
  {
    id: 3,
    rating: 5,
    text: "Pelayanan sangat memuaskan. Semua berjalan lancar dan tanpa hambatan. Sangat direkomendasikan!",
    author: "Brooklyn Simmons",
  },
  {
    id: 4,
    rating: 5,
    text: "Proses penjualan sangat sederhana dan mudah. Maximillian sangat ramah dan benar-benar luar biasa.",
    author: "Augustus Stre",
  },
  {
    id: 5,
    rating: 5,
    text: "Proses penjualan sangat sederhana dan mudah. Maximillian sangat ramah dan sangat membantu.",
    author: "Jake Green",
  },
  {
    id: 6,
    rating: 5,
    text: "Layanan luar biasa! Saya tidak pernah mengalami proses pembelian secepat dan semudah ini sebelumnya.",
    author: "Emily Watson",
  },
  {
    id: 7,
    rating: 5,
    text: "Semua dijelaskan dengan sangat jelas dan transparan. Sangat menghargai profesionalisme Maximillian.",
    author: "Michael Brown",
  },
  {
    id: 8,
    rating: 5,
    text: "Saya sangat puas dengan prosesnya. Tidak ada tekanan dan semua berjalan mulus dari awal hingga akhir.",
    author: "Samantha Lee",
  },
  {
    id: 9,
    rating: 5,
    text: "Rekomendasi terbaik! Tidak ada keraguan untuk kembali menggunakan jasa ini di masa mendatang.",
    author: "Thomas Nguyen",
  },
  {
    id: 10,
    rating: 5,
    text: "Mereka membuat semuanya begitu mudah. Pelayanan pelanggan sangat baik dan hasilnya sesuai harapan.",
    author: "Linda Martinez",
  },
  {
    id: 11,
    rating: 5,
    text: "Pelayan bagus dan memuaskan, sales ramah di saya juga diberi kesempatan untuk test drive mobilnya ",
    author: "Sibal Seki",
  },
];


function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <i key={i} className="fas fa-star filled"></i>
      ) : (
        <i key={i} className="far fa-star"></i>
      )
    );
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>Apa kata pelanggan kami</h2>
        <p className="rating-summary">
          Dinilai 4.7/5 dari 39.210 ulasan, menampilkan ulasan bintang 5 kami
        </p>
      </div>

      <div className="testimonials-wrapper">
        <div className="testimonials-container" ref={scrollRef}>
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="rating-stars">{renderStars(testimonial.rating)}</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-scroll-nav">
          <button className="scroll-arrow left" onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-arrow right" onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

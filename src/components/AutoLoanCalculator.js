import React, { useState } from 'react';
import '../styles/AutoLoanCalculator.css';

function AutoLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Format number with dots (700000000 => 700.000.000)
  const formatNumberWithDots = (value) => {
    const cleaned = value.replace(/\D/g, ''); // Hapus semua karakter non-digit
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Tambah titik pemisah
  };

  // Saat input loanAmount berubah
  const handleLoanAmountChange = (e) => {
    const rawValue = e.target.value;
    const formatted = formatNumberWithDots(rawValue);
    setLoanAmount(formatted);
  };

  const calculateLoan = () => {
    // Parse value tanpa titik (.) ke angka
    const P = parseFloat(loanAmount.replace(/\./g, ''));
    const I = parseFloat(interestRate) / 100 / 12;
    const N = parseFloat(loanTerm) * 12;

    if (P > 0 && I > 0 && N > 0) {
      const M = P * (I * Math.pow(1 + I, N)) / (Math.pow(1 + I, N) - 1);
      setMonthlyPayment(M);
    } else if (P > 0 && I === 0 && N > 0) {
      setMonthlyPayment(P / N);
    } else {
      setMonthlyPayment(null);
    }
  };

  const formatToRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  return (
    <div className="calculator-section">
      <div className="calculator-content-wrapper">
        <div className="auto-loan-calculator-card">
          <h2>Kalkulator Kredit Mobil</h2>
          <p>Gunakan kalkulator ini untuk menghitung estimasi cicilan bulanan dari pinjaman mobil Anda.</p>

          <div className="calculator-inputs">
            <div className="input-group">
              <label htmlFor="loanAmount">Jumlah Pinjaman (Rp)</label>
              <input
                type="text"
                id="loanAmount"
                placeholder="Contoh: 250.000.000"
                value={loanAmount}
                onChange={handleLoanAmountChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="interestRate">Suku Bunga (%)</label>
              <input
                type="number"
                id="interestRate"
                placeholder="Contoh: 5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="loanTerm">Jangka Waktu (Tahun)</label>
              <input
                type="number"
                id="loanTerm"
                placeholder="Contoh: 5"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
          </div>
          <button onClick={calculateLoan} className="calculate-btn">Hitung</button>
          
          {monthlyPayment !== null && (
            <div className="monthly-payment-result">
              <p>Estimasi Cicilan Bulanan:</p>
              <h3>{formatToRupiah(monthlyPayment)}</h3>
            </div>
          )}
        </div>
        <div className="calculator-image">
          <img src={process.env.PUBLIC_URL + 'https://www.bca.co.id/-/media/Feature/News/Edukatips/2023/02/20230203-cara-menabung-untuk-membeli-mobil-impian-desktop.jpg'} alt="Pria dengan mobil mainan" />
        </div>
      </div>
    </div>
  );
}

export default AutoLoanCalculator;

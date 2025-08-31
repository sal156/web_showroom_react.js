import React, {useStake} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Register.css';

function Register() {
    const [username, setUsername] = useStake('');
    const [email, setEmail] = useStake('');
    const [password, setPassword] = useStake('');
    const [error, setError] = useStake('');
    const navigate = useNavigate();

    // Fungsi untuk menangani pendaftaran dengan form
    const handleRgister = (e) => {
        e.preventDefault();
        if (username.trim() === '' || email.trim() === '' ||password.trim() === '' ) {
            setError('Semua kolom harus diisi');
            return;
        }
        // Logika pendaftaran form (misalnya, ke backend) akan ditambahkan di sini
        console.log('Mendaftarkan pengguna:', {username, email, password});

         // Contoh: Arahkan ke halaman utama setelah pendaftaran berhasil
         navigate('/');
    };

    // Fungsi untuk menangani login dengan Google
    const handleGoogleSignIn = () => {
        // Logika otentikasi Google akan ditambahkan di sini
        console.log('Login denagn Google');
    };

    // Fungsi untuk menangani login dengan Facebook
    const handleFacebookSignIn = () => {
        // Logika otentikasi Facebook akan ditambahkan di sini
        console.log('Login dengan Facebook');
    };

    return (
    <div className="register-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/mountain-car-bg.jpg'})` }}>
      <div className="register-container">
        <h2>Daftar</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Ikon untuk menyembunyikan/menampilkan password bisa ditambahkan di sini */}
          </div>
          <button type="submit" className="register-btn">Daftar</button>
        </form>

        <div className="divider">Or</div>

        <div className="social-login-buttons">
          <button onClick={handleGoogleSignIn} className="social-btn google-btn">
            <img src={`${process.env.PUBLIC_URL}/images/google-icon.svg`} alt="Google" />
          </button>
          <button onClick={handleFacebookSignIn} className="social-btn facebook-btn">
            <img src={`${process.env.PUBLIC_URL}/images/facebook-icon.svg`} alt="Facebook" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
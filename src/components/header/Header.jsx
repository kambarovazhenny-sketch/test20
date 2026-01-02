// components/header/header.jsx
import './header.css';

function Header({ setPage }) {
  return (
    <header className="header">
      <div className="logo">
        Bank<span>Hotel</span>
      </div>

      <nav className="nav">
        <a onClick={() => setPage('home')}>Home</a>
        <a onClick={() => setPage('about')}>About</a>
        <a onClick={() => setPage('rooms')}>Rooms</a>
        <a onClick={() => setPage('restaurant')}>Restaurant</a>
        <a onClick={() => setPage('conference')}>Conference Hall</a>
        <a onClick={() => setPage('contacts')}>Contacts</a>
      </nav>

      <div className="phone">+38 032 297 50 20</div>
    </header>
  );
}

export default Header;

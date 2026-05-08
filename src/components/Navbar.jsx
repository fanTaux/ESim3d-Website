import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="glass-nav navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <div className="logo-bar b1"></div>
            <div className="logo-bar b2"></div>
            <div className="logo-bar b3"></div>
          </div>
          <span>E-Sim3D</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Modules</Link>
          <Link to="/workspace" className={location.pathname === '/workspace' ? 'active' : ''}>3D Canvas</Link>
          <Link to="/checkout" className={location.pathname === '/checkout' ? 'active' : ''}>Pricing</Link>
        </div>
        <div className="nav-actions">
          <button className="btn-login">Log In</button>
          <button className="btn-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

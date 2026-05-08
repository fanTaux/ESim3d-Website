import { PlayCircle, Cpu, Sliders, TerminalSquare, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="badge">NEXT-GEN SIMULATION</div>
            <h1>Master Electronics<br/><span className="text-terracotta">in 3D</span></h1>
            <p className="hero-subtitle">
              Step inside the circuit. Interactive high-fidelity simulations that bridge the gap between abstract theory and tactile hardware engineering.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/workspace')}>Get Started</button>
              <button className="btn-secondary">
                <PlayCircle size={20} className="icon-left" /> Watch Demo
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-render-placeholder">
              {/* This represents the 3D Render in the Hero section */}
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Microcontroller" className="hero-image" />
              <div className="floating-stat">
                <div className="stat-icon"><Cpu size={16} /></div>
                <div className="stat-text">
                  <span className="stat-label">REAL-TIME CURRENT</span>
                  <span className="stat-value">12.4 mA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="paths-section">
        <div className="container">
          <div className="section-header">
            <h2>Learning Paths</h2>
            <p>Explore our comprehensive curriculum built for the engineers of tomorrow. Each path features hands-on 3D labs.</p>
          </div>
          <div className="paths-grid">
            <div className="path-card card">
              <div className="card-icon"><Cpu size={24} /></div>
              <h3>Digital Systems</h3>
              <p>Master the logic behind digital architecture, from basic gates to complex state machines and ALU design.</p>
              <a href="#" className="card-link">Explore Module <ArrowRight size={16} /></a>
            </div>
            <div className="path-card card">
              <div className="card-icon"><Sliders size={24} /></div>
              <h3>Advanced Circuits</h3>
              <p>A deep dive into analog power systems and sophisticated signal processing components with real-time feedback.</p>
              <a href="#" className="card-link">Explore Module <ArrowRight size={16} /></a>
            </div>
            <div className="path-card card">
              <div className="card-icon"><TerminalSquare size={24} /></div>
              <h3>Embedded Systems</h3>
              <p>Program and simulate real-world hardware interfaces using our integrated virtual code editor and MCU emulator.</p>
              <a href="#" className="card-link">Explore Module <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container card">
          <div className="cta-content">
            <h2>Ready to start building?</h2>
            <p>Join thousands of students and professionals who are already mastering electronics through our immersive 3D simulation platform.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/workspace')}>Get Started Now</button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="nav-logo">
              <div className="logo-icon">
                <div className="logo-bar b1"></div>
                <div className="logo-bar b2"></div>
                <div className="logo-bar b3"></div>
              </div>
              <span>E-Sim3D</span>
            </div>
            <p>Redefining engineering education through interactive, high-fidelity 3D simulations. Learn by doing, anywhere.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#">Modules</a>
              <a href="#">Canvas</a>
              <a href="#">Documentation</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2024 E-Sim3D. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

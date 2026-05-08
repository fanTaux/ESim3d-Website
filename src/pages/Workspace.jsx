import { useState } from 'react';
import { 
  SquareTerminal, 
  Cpu, 
  Zap, 
  Settings2, 
  ChevronRight, 
  ChevronLeft,
  Undo2,
  Redo2,
  Play,
  Grid,
  Video
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import MockupBoard from '../components/MockupBoard';
import './Workspace.css';

export default function Workspace() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPin, setSelectedPin] = useState(null);

  const handlePinClick = (pinData) => {
    setSelectedPin(pinData);
  };

  return (
    <div className="workspace-page">
      {/* Left Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </div>
        
        <div className="sidebar-content">
          <div className="sidebar-group">
            <h4 className={sidebarOpen ? '' : 'hidden'}>Logic Gates</h4>
            <div className="component-btn">
              <Settings2 size={24} />
              {sidebarOpen && <span>AND Gate</span>}
            </div>
            <div className="component-btn">
              <Settings2 size={24} />
              {sidebarOpen && <span>OR Gate</span>}
            </div>
          </div>
          
          <div className="sidebar-group">
            <h4 className={sidebarOpen ? '' : 'hidden'}>Integrated Circuits</h4>
            <div className="component-btn active">
              <Cpu size={24} />
              {sidebarOpen && <span>ATmega328P</span>}
              <div className="active-dot"></div>
            </div>
            <div className="component-btn">
              <Cpu size={24} />
              {sidebarOpen && <span>555 Timer IC</span>}
            </div>
          </div>
          
          <div className="sidebar-group">
            <h4 className={sidebarOpen ? '' : 'hidden'}>Passive Components</h4>
            <div className="component-btn">
              <Zap size={24} />
              {sidebarOpen && <span>Resistor</span>}
            </div>
            <div className="component-btn">
              <Zap size={24} />
              {sidebarOpen && <span>Capacitor</span>}
            </div>
          </div>
        </div>
      </aside>

      {/* Central 3D Canvas */}
      <main className="canvas-area">
        <div className="toolbar">
          <div className="toolbar-group">
            <button className="icon-btn"><Undo2 size={18} /></button>
            <button className="icon-btn"><Redo2 size={18} /></button>
          </div>
          <button className="btn-simulate">
            <Play size={16} fill="currentColor" /> Run Simulation
          </button>
          <div className="toolbar-group">
            <button className="icon-btn"><Grid size={18} /></button>
            <button className="icon-btn"><Video size={18} /></button>
          </div>
        </div>

        <div className="canvas-container">
          <Canvas camera={{ position: [0, 5, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <MockupBoard onPinClick={handlePinClick} />
            
            <Environment preset="city" />
            <ContactShadows position={[0, -0.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
            <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
          </Canvas>
        </div>
        
        <div className="canvas-footer">
          <div className="status-indicator">
            <div className="status-dot"></div>
            SIMULATOR READY
          </div>
          <div className="status-meta">Total Components: <strong>14</strong></div>
          <div className="status-meta">Power Consumption: <strong>240 mW</strong></div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="right-panel">
        {selectedPin ? (
          <div className="info-card">
            <div className="info-header">
              <span className="badge-terracotta">PIN SELECTION</span>
            </div>
            <h3>{selectedPin.name}</h3>
            <p className="pin-description">{selectedPin.description}</p>
            
            <div className="specs-section">
              <h4>SPECIFICATIONS</h4>
              <div className="specs-grid">
                <div className="spec-box">
                  <span className="spec-label">VOLTAGE</span>
                  <span className="spec-value">{selectedPin.voltage}</span>
                </div>
                <div className="spec-box">
                  <span className="spec-label">MAX CURRENT</span>
                  <span className="spec-value">{selectedPin.current}</span>
                </div>
              </div>
            </div>
            
            <div className="telemetry-section">
              <h4>LIVE TELEMETRY</h4>
              <div className="telemetry-box">
                <div className="wave-placeholder">
                  {/* Fake wave visual */}
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15" fill="none" stroke="var(--sage)" strokeWidth="2" opacity="0.5"/>
                  </svg>
                </div>
                <div className="telemetry-value">4.98 <span>V</span></div>
              </div>
            </div>
            
            <div className="info-actions">
              <button className="btn-secondary full-width">Add Note to Pin</button>
              <button className="btn-text full-width">Hide Annotation</button>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <SquareTerminal size={32} opacity={0.3} />
            <p>Select a pin on the 3D board to view details.</p>
          </div>
        )}
      </aside>
    </div>
  );
}

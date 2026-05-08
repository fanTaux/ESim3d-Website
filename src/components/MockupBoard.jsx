import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const pinData = [
  {
    id: 'pin-5v',
    name: 'Power Pin: 5V',
    description: 'This pin outputs a regulated 5V from the regulator on the board. The board can be supplied with power either from the DC power jack (7 - 12V), or the USB connector (5V).',
    voltage: '5.0 Volts',
    current: '500 mA',
    position: [-1.5, 0.2, 1.2],
    color: '#C4704F'
  },
  {
    id: 'pin-gnd',
    name: 'Ground Pin',
    description: 'Ground pins are used to close the electrical circuit and provide a common reference voltage level.',
    voltage: '0 Volts',
    current: 'N/A',
    position: [-1, 0.2, 1.2],
    color: '#2E2E2E'
  },
  {
    id: 'pin-13',
    name: 'Digital I/O: 13',
    description: 'Digital pin 13 has a built-in LED connected to it. When the pin is HIGH value, the LED is on, when the pin is LOW, it\'s off.',
    voltage: '5.0 Volts',
    current: '20 mA',
    position: [1.5, 0.2, -1.2],
    color: '#8A9E8C'
  }
];

function Pin({ position, color, data, onPinClick, selected }) {
  const [hovered, setHover] = useState(false);
  
  return (
    <group position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onPinClick(data);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={() => setHover(false)}
      >
        <cylinderGeometry args={[0.08, 0.08, 0.4, 16]} />
        <meshStandardMaterial 
          color={selected ? '#FFFFFF' : (hovered ? '#FDFAF5' : color)} 
          roughness={0.3} 
          metalness={0.8}
        />
      </mesh>
      {/* Pin Highlight Ring */}
      {(hovered || selected) && (
        <mesh position={[0, -0.15, 0]} rotation={[Math.PI/2, 0, 0]}>
          <ringGeometry args={[0.12, 0.15, 32]} />
          <meshBasicMaterial color={selected ? '#C4704F' : '#FFFFFF'} transparent opacity={0.8} />
        </mesh>
      )}
    </group>
  );
}

export default function MockupBoard({ onPinClick }) {
  const boardRef = useRef();
  const [selectedId, setSelectedId] = useState(null);

  const handlePinClick = (data) => {
    setSelectedId(data.id);
    if(onPinClick) onPinClick(data);
  };

  // Gentle floating animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (boardRef.current) {
      boardRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={boardRef}>
      {/* PCB Base */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 0.1, 3]} />
        <meshStandardMaterial color="#22332A" roughness={0.7} />
      </mesh>
      
      {/* Main Microcontroller IC */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <boxGeometry args={[1.5, 0.15, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
      </mesh>

      {/* USB Port */}
      <mesh position={[-2, 0.15, -0.8]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.5]} />
        <meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Power Jack */}
      <mesh position={[-2, 0.15, 0.8]} castShadow>
        <boxGeometry args={[0.5, 0.3, 0.4]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
      </mesh>
      
      {/* Header Pins Blocks */}
      <mesh position={[0, 0.1, 1.2]} castShadow>
        <boxGeometry args={[3.6, 0.1, 0.2]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0, 0.1, -1.2]} castShadow>
        <boxGeometry args={[3.6, 0.1, 0.2]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Interactive Pins */}
      {pinData.map((pin) => (
        <Pin 
          key={pin.id} 
          position={pin.position} 
          color={pin.color} 
          data={pin} 
          onPinClick={handlePinClick}
          selected={selectedId === pin.id}
        />
      ))}

      {/* Board Label */}
      <Text
        position={[0, 0.06, 0.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        opacity={0.8}
      >
        E-Sim UNO R3
      </Text>
    </group>
  );
}

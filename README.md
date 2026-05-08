<div align="center">
  <img src="src/assets/hero.png" alt="E-Sim3D Hero Banner" width="250" />
  
  <h1>🌐 E-Sim3D</h1>
  <p><em>Next-Gen 3D Electronics Simulation Platform</em></p>

  <div>
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Three.js-0.184-000000?style=flat-square&logo=three.js" alt="Three.js" />
  </div>
</div>

<br />

<h2>✨ Tentang Proyek</h2>
<p>
  <strong>E-Sim3D</strong> membawa pembelajaran elektronika ke tingkat berikutnya melalui simulasi 3D interaktif. Kita dapat memvisualisasikan, merangkai, dan memahami teori sirkuit secara mendalam melalui ruang kerja virtual yang elegan. Platform ini dirancang untuk menjembatani teori abstrak dengan rekayasa perangkat keras yang lebih nyata, memungkinkan kita mengeksplorasi mikrokontroler, gerbang logika, hingga komponen pasif secara <i>real-time</i>.
</p>

<br />

<h2>🚀 Fitur Utama</h2>
<ul>
  <li><strong>Workspace 3D Interaktif:</strong> Jelajahi dan putar papan sirkuit dalam ruang 3D (didukung oleh <code>@react-three/fiber</code>).</li>
  <li><strong>Telemetri Real-time:</strong> Kita dapat mengklik pin komponen untuk melihat detail spesifikasi, batas arus, dan membaca simulasi tegangan secara langsung.</li>
  <li><strong>Library Komponen:</strong> Akses instan ke berbagai komponen elektronika seperti IC (ATmega328P, 555 Timer), Gerbang Logika (AND, OR), dan komponen pasif (Resistor, Kapasitor).</li>
  <li><strong>Alur Pembelajaran & E-Commerce:</strong> UI/UX yang mulus untuk menavigasi modul pembelajaran, paket kit IoT, dan halaman <i>checkout</i> bergaya minimalis.</li>
</ul>

<br />

<h2>🛠️ Teknologi yang Kita Gunakan</h2>
<p>Proyek ini dibangun di atas ekosistem modern untuk menjamin performa rendering 3D yang maksimal di peramban web:</p>
<ul>
  <li><strong>Framework:</strong> React 19 dan Vite untuk <i>build tool</i> yang super cepat.</li>
  <li><strong>3D Engine:</strong> Three.js, React Three Fiber (R3F), dan React Three Drei.</li>
  <li><strong>Routing:</strong> React Router DOM v7.</li>
  <li><strong>Desain:</strong> CSS Native dengan pendekatan palet warna <i>earth-tone</i> (Beige, Sage, Terracotta).</li>
  <li><strong>Ikonografi:</strong> Lucide React.</li>
</ul>

<br />

<h2>⚙️ Cara Memulai (Local Development)</h2>
<p>Untuk menjalankan dan mengembangkan platform simulasi ini di lingkungan lokal kita, ikuti langkah-langkah instalasi berikut:</p>

<pre><code>git clone &lt;repository-url&gt;
cd esim3d-website
npm install
npm run dev
</code></pre>

<br />

<h2>📂 Struktur Direktori Utama</h2>
<ul>
  <li><code>/src/components</code> - Berisi komponen UI modular dan komponen objek 3D (seperti <code>MockupBoard.jsx</code>).</li>
  <li><code>/src/pages</code> - Halaman utama aplikasi (Home, Workspace, Checkout).</li>
  <li><code>/src/assets</code> - Kumpulan aset statis dan media.</li>
</ul>

<br />

<div align="center">
  <p>Dibuat dengan 💻 untuk inovasi edukasi rekayasa perangkat keras.</p>
</div>
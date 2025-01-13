import Header from './components/header/Header'
import StaticSheet from './components/statSheet/StaticSheet'
import './App.css'
import Footer from './components/footer/Footer'
import Season2024 from './components/schedule/seasons/Season2024'
import Standings from './components/standings/Standings'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  
  return (
    
    <Router>
  
    <main>
    
      <Header />
      <section id='main-section'>
        <Routes>
            <Route path="/" element={<StaticSheet />} />
            <Route path="/schedule" element={<Season2024 />} />
            <Route path="/standings" element={<Standings />} />
             
        </Routes>
      </section>
      <Footer />
    </main>
  </Router>
     
      
   
  )
}

export default App

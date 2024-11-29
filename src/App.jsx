import Header from './components/header/Header'
import StaticSheet from './components/statSheet/StaticSheet'
import './App.css'
import { useState } from 'react'
import Footer from './components/footer/Footer'
import Season2024 from './components/schedule/seasons/Season2024'
import Standings from './components/standings/Standings'
function App() {
  const [prevTopic, setTopic] = useState("stats")
  function topicHandler(selectedValue) {
    setTopic(selectedValue)
  }
  
  return (
    <main>
      <Header selectedTopic={topicHandler}></Header>
      <section id='main-section'>
        {prevTopic === 'schedule' ? <Season2024></Season2024> : prevTopic === 'standings' ? <Standings></Standings> : <StaticSheet></StaticSheet>}
        
      </section>
      <Footer></Footer>
    </main>
   
     
      
   
  )
}

export default App

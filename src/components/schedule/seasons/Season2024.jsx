import BubleContainer from "./BubleContainer"
import { useState, useEffect } from "react"
export default function Season2024() {
    const [dataPrev, setBubleData] = useState([]);
    const [prevBuble, setBuble] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/statistics/bubles2023');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setBubleData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      const handleBubleSelect = (id) => {
        setBuble(prevBuble === id ? null : id);
      };
    return (
        <section className="season-section">
            <h1 >2024 Sesason Schedule</h1>
            {dataPrev.map((item) => <BubleContainer key={item.id} prevBuble = {prevBuble} handleBubleSelect={handleBubleSelect}  {...item}></BubleContainer>)}
            
        </section>
    )
}
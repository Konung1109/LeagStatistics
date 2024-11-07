import Stats from './Stats'
import  './StatSheets.css'
import Switchers from './Switchers'
import Filters from './Filters'
import React, {useState} from 'react'

export default function StaticSheet() {
    
    const [filtersSet, setFilterSet] = useState([])
    const [selectedSwitcher, setSwitcher] = useState('player')
    function switchClickHandler(selectedSwitcher) {
        setSwitcher(selectedSwitcher)
    }
    function filtersClickHandler(selectetFilter)  {
        setFilterSet(selectetFilter)
        console.log(filtersSet)
    }
    return (
        <menu id="menu">   
                <Switchers onSelect = {switchClickHandler} />
                <Filters switcher = {selectedSwitcher} onFilterChange = {filtersClickHandler} />
                <Stats switcher = {selectedSwitcher} filter = {filtersSet} />
        </menu>
    )
}